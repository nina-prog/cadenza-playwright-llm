from typing import Union, List
from typing import Dict, List, Union
import time
import tempfile
from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction
from Levenshtein import distance
import esprima
import os
import torch
import torchvision.transforms as transforms
from PIL import Image
from torchvision import models, transforms
from torch.nn.functional import cosine_similarity
from torchvision.models import ResNet18_Weights
from src.utils.helpers import tokenize_code

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level="DEBUG")  # Change to DEBUG for more verbosity


def aggregate_scores(scores: Dict[str, List[Union[float, int, None]]]) -> Dict[str, Union[float, None]]:
    """Aggregates the given scores. Supports multiple metrics: weighted bleu, success rate,
    and levenshtein distance. The keys of the given scores must be the same.

    :param scores: The scores to aggregate.
    :return: The aggregated scores of the given scores.
    """
    if not scores:
        raise ValueError("The scores dictionary is empty.")

    metrics = scores.keys()

    # Check if all score lists have the same length
    score_lengths = {metric: len(scores[metric]) for metric in metrics}
    if len(set(score_lengths.values())) != 1:
        raise ValueError("The given scores must have the same length.")

    agg_scores = {}

    for metric in metrics:
        try:
            if metric in {'weighted bleu', 'success rate', 'levenshtein distance'}:
                metric_scores = scores[metric]

                if not metric_scores:
                    agg_scores[metric] = None
                    logger.warning(f"Missing {metric} scores. Skipping...")
                    continue

                if any(score is None for score in metric_scores):
                    logger.warning(f"Found None values in {metric} scores. Setting to 0...")
                    metric_scores = [0 if score is None else score for score in metric_scores]

                # Calculate the average score
                agg_scores[metric] = sum(metric_scores) / len(metric_scores)
            else:
                agg_scores[metric] = None
                logger.warning(f"Unknown metric: {metric}. Skipping...")
        except Exception as e:
            agg_scores[metric] = None
            logger.error(f"Error aggregating {metric}: {e}")

    return agg_scores


def calculate_scores(test_cases: List[dict], config: dict, metrics: list = None) -> dict:
    """Calculate scores for given metrics across multiple test cases.

    :param test_cases: List of dictionaries, each containing 'generated_code', 'validation_code',
                       'precondition_code', etc.
    :param config: The configuration dictionary.
    :param metrics: List of metrics to calculate the scores for, e.g., ['weighted bleu', 'success rate', 'levenshtein distance']
    :return: Dictionary containing scores for each metric across all test cases.
    """
    if metrics is None:
        metrics = ['weighted bleu', 'success rate', 'levenshtein distance', "similarity"]
    scores = {metric: [] for metric in metrics}

    for test_case in test_cases:
        test = test_case.get('test_case', '')
        test_step = test_case.get('test_step', '')
        generated_code = test_case.get('generated_code', '')
        validation_code = test_case.get('validation_code', '')
        precondition_code = test_case.get('precondition_code', '')

        image_folder_pred = os.path.normpath(config['paths']['eval_run_dir'])
        image_folder_gt = os.path.normpath(config['paths']['gt_images'])
        logger.debug(f"Calculating scores for test case {test}_{test_step}...")

        for metric in metrics:
            try:
                match metric:
                    case 'weighted bleu':
                        scores[metric].append(
                            calculate_weighted_bleu_score(generated_code, validation_code, precondition_code)
                        )
                    case 'success rate':
                        file_name = test + "_" + test_step + ".spec.ts"
                        scores[metric].append(
                            calculate_success_rate(generated_code, file_name=file_name, config=config)
                        )
                    case 'similarity':
                        file_name = test + "_" + test_step
                        screenshot_path_pred = os.path.join(image_folder_pred, f"{file_name}.png")
                        screenshot_path_gt = os.path.join(image_folder_gt, f"{file_name}.png")

                        model = models.resnet18(weights=ResNet18_Weights.DEFAULT)
                        model.eval()

                        if not os.path.exists(screenshot_path_gt):
                            scores[metric].append(0)
                        else:
                            # Define your preprocessing steps here
                            preprocess = transforms.Compose([
                                transforms.Resize((224, 224)),  # Resize the images to the size expected by the model
                                transforms.ToTensor(),  # Convert the image to a PyTorch tensor
                                transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
                                # Normalize the tensor
                            ])
                            scores[metric].append(
                                encode_and_calculate_similarity(screenshot_path_pred, screenshot_path_gt, model=model,
                                                                preprocess=preprocess)
                            )
                    case 'levenshtein distance':
                        scores[metric].append(
                            calculate_levenshtein_distance(generated_code, validation_code)
                        )
                    case _:
                        scores[metric].append(None)
                        logger.warning(f"Unknown metric: {metric}. Skipping...")
            except Exception as e:
                scores[metric].append(None)
                logger.error(f"Error calculating {metric} for test case {test}_{test_step}: {e}")
    return scores


def encode_and_calculate_similarity(pred_img_path, gt_img_path, model, preprocess):
    # Check if the prediction image path exists
    if not os.path.exists(pred_img_path):
        return 0

    # Load and preprocess the images
    image1 = Image.open(pred_img_path)
    image2 = Image.open(gt_img_path)
    input_tensor1 = preprocess(image1).unsqueeze(0)  # Create a mini-batch as expected by the model
    input_tensor2 = preprocess(image2).unsqueeze(0)

    # Encode the images
    with torch.no_grad():
        embedding1 = model(input_tensor1)
        embedding2 = model(input_tensor2)

    # Calculate cosine similarity
    cos_sim = cosine_similarity(embedding1.numpy(), embedding2.numpy())
    return round(cos_sim.item(), 4)


def calculate_weighted_bleu_score(generated_code: str, validation_code: str, precondition_code: str,
                                  alpha: float = 0.5) -> float:
    """ This method returns the BLEU score of the given generated code.

    :param generated_code: The generated code from the LLM as Python or TypeScript playwright script.
    :param validation_code: Examples for validation as Python or TypeScript playwright script.
    :param precondition_code: The precondition of the step as Python or TypeScript playwright script
    :param alpha: The weight of the second part of the BLEU score.
    :return: The BLEU score of the given generated code.
    """
    generated_code_tokens, gen_error = tokenize_code(generated_code)
    validation_code_tokens, val_error = tokenize_code(validation_code)
    precondition_code_tokens, pre_error = tokenize_code(precondition_code)

    if gen_error:
        logger.warning(f"Incomplete generated code detected: {gen_error}")
    if val_error:
        logger.warning(f"Incomplete validation code detected: {val_error}")
    if pre_error:
        logger.warning(f"Incomplete precondition code detected: {pre_error}")

    if not generated_code_tokens or not validation_code_tokens or not precondition_code_tokens:
        logger.warning("One or more token lists are empty, unable to calculate BLEU score. Skipping...")
        return 0.0

    precondition_code_length = len(precondition_code_tokens)
    precondition_code_length_without_end_lines = -1
    for i in range(precondition_code_length):
        if validation_code_tokens[i] != precondition_code_tokens[i]:
            precondition_code_length_without_end_lines = i
            break

    # Define a smoothing function for BLEU score calculation
    smoothing_function = SmoothingFunction().method1

    # The first part: Has the LLM correctly copied the precondition code?
    first_bleu_score = sentence_bleu(references=[validation_code_tokens[:precondition_code_length_without_end_lines]],
                                     hypothesis=generated_code_tokens[:precondition_code_length_without_end_lines],
                                     smoothing_function=smoothing_function)

    # The second part: Has the LLM correctly added the new lines to reach the given goal?
    second_bleu_score = sentence_bleu(references=[validation_code_tokens[precondition_code_length_without_end_lines:]],
                                      hypothesis=generated_code_tokens[precondition_code_length_without_end_lines:],
                                      smoothing_function=smoothing_function)

    return (1 - alpha) * first_bleu_score + alpha * second_bleu_score


def calculate_success_rate(generated_code: str, file_name: str, config: dict):
    """Returns the success rate of the given generated code."""
    try:
        # Normalize paths
        #eval_run_dir = os.path.normpath(config['paths']['eval_run_dir'])
        #screen_shot_dir = os.path.join(eval_run_dir, 'screenshots')
        pred_dir = os.path.normpath(config['paths']['prediction_dir'])

        # Configuration template with a placeholder for testDir
        config_template = """
        import {{ defineConfig }} from '@playwright/test';

        export default defineConfig({{
          testDir: '{test_dir}',
          use: {{
            headless: true,
            screenshot: 'only-on-failure',
            timeout: 30000,
            reporter: [['list'], ['json']],
          }},
        }});
        """

        # Create a temporary Playwright configuration file
        temp_config_content = config_template.format(test_dir=pred_dir)
        temp_config_path = tempfile.mktemp(suffix=".ts")
        with open(temp_config_path, "w") as temp_config_file:
            temp_config_file.write(temp_config_content)

        # Run the Playwright tests
        try:
            logger.debug(f"Running Playwright test for {file_name}...")
            os.system(f"npx playwright test {file_name} --config=config/playwright.config.ts")
            # Check if the test passed
            if os.path.exists("test-results/.last-run.json"):
                with open("test-results/.last-run.json", "r") as file:
                    test_results = file.read()
                    if "passed" in test_results:
                        score = 1
                        logger.debug(f"Test {file_name} passed. Score: {score}")
                    else:
                        score = 0
                        logger.debug(f"Test {file_name} failed. Score: {score}")
            else:
                score = 0
                logger.debug(f"Test {file_name} failed. Score: {score}")

        except Exception as e:
            logger.error(f"Failed to run Playwright test. Error: {e}")
            score = 0

        finally:
            # Clean up the temporary config file
            if os.path.exists(temp_config_path):
                os.remove(temp_config_path)

        return score

    except Exception as e:
        logger.error(f"An error occurred: {e}")
        return 0


def calculate_levenshtein_distance(generated_code, validation_code):
    """ This method returns the Levenshtein distance of the given generated code.

    :param generated_code: The generated code from the LLM as TypeScript playwright script.
    :param validation_code: Examples for validation TypeScript playwright script.
    :return: The Levenshtein distance over the length of the max code length of the given generated code.
    """
    gen_script = ' '.join(strip_script_code(generated_code))
    vd_script = ' '.join(strip_script_code(validation_code))

    len_gen = len(generated_code)
    len_valid = len(validation_code)
    max_len = max(len_gen, len_valid)

    score = distance(gen_script, vd_script) / max_len

    return score


def strip_script_code(script):
    """ This method strips the code from the given script.

    :param script: The script to strip the code from.
    :return: The stripped code as list of strings.
    """
    # Processing for Generated Scripts
    list_rmv_lines = []
    scriptByLines = script.splitlines()

    for i in range(0, len(scriptByLines)):
        if scriptByLines[i][:10].find("await") == -1:
            # Temporary Exception for typescript scripts using const; Not human reproducible for python scripts
            if scriptByLines[i][:10].find("const") == -1:
                list_rmv_lines.append(scriptByLines[i])

    for e in list_rmv_lines:
        scriptByLines.remove(e)

    length_script = len(scriptByLines)
    for i in range(0, len(scriptByLines)):
        # String Cleaning for Generated Scripts (Phyton + TypeScript)
        scriptByLines[i] = scriptByLines[i].lower()
        scriptByLines[i] = scriptByLines[i].replace("_", "")
        while scriptByLines[i].find("  ") != -1:
            scriptByLines[i] = scriptByLines[i].replace("  ", " ")

    return scriptByLines
