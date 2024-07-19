from typing import Union, List
from typing import Dict, List, Union
import time
from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction
from Levenshtein import distance
import esprima
import os
import torch
import torchvision.transforms as transforms
from PIL import Image
from torchvision import models
from torch.nn.functional import cosine_similarity

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
        metrics = ['weighted bleu', 'success rate', 'levenshtein distance']

    scores = {metric: [] for metric in metrics}

    for test_case in test_cases:
        test = test_case.get('test_case', '')
        test_step = test_case.get('test_step', '')
        generated_code = test_case.get('generated_code', '')
        validation_code = test_case.get('validation_code', '')
        precondition_code = test_case.get('precondition_code', '')

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
                        #if not os.path.exists(config['paths']['eval_run_dir'] + "screenshots/"):
                        #    logger.error(f"Screenshots for similarity metric not found. Skipping...")
                        #file_name = test + "_" + test_step + ".png"
                        #gt_image_path = config['dataloading']['screenshot_dir'] + file_name
                        #generated_image_path = config['paths']['eval_run_dir'] + "screenshots/" + file_name
                        # config['dataloading']['screenshot_dir'], config['paths']['eval_run_dir'] + "screenshots/"
                        #scores[metric].append(
                        #    encode_and_calculate_similarity("./data/raw/screenshot/0_1.png", "./data/raw/screenshot/1_1.png")
                        #)
                        pass
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

def encode_and_calculate_similarity(image_path1, image_path2, model_name='resnet18'):
    # Load a pre-trained model
    model = getattr(models, model_name)(pretrained=True)
    model.eval()

    # Define a transformation to apply to the images
    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    # Load and preprocess the images
    image1 = Image.open(image_path1)
    image2 = Image.open(image_path2)
    input_tensor1 = preprocess(image1).unsqueeze(0)  # Create a mini-batch as expected by the model
    input_tensor2 = preprocess(image2).unsqueeze(0)

    # Encode the images
    with torch.no_grad():
        embedding1 = model(input_tensor1)
        embedding2 = model(input_tensor2)

    # Calculate cosine similarity
    cos_sim = cosine_similarity(embedding1, embedding2)
    return cos_sim.item()


def calculate_weighted_bleu_score(generated_code: str, validation_code: str, precondition_code: str,
                                  alpha: float = 0.5) -> float:
    """ This method returns the BLEU score of the given generated code.

    :param generated_code: The generated code from the LLM as Python or TypeScript playwright script.
    :param validation_code: Examples for validation as Python or TypeScript playwright script.
    :param precondition_code: The precondition of the step as Python or TypeScript playwright script
    :param alpha: The weight of the second part of the BLEU score.
    :return: The BLEU score of the given generated code.
    """
    generated_code_tokens = esprima.tokenize(generated_code)
    validation_code_tokens = esprima.tokenize(validation_code)
    precondition_code_tokens = esprima.tokenize(precondition_code)

    # Convert tokens to string
    generated_code_tokens = [str(elem) for elem in generated_code_tokens]
    validation_code_tokens = [str(elem) for elem in validation_code_tokens]
    precondition_code_tokens = [str(elem) for elem in precondition_code_tokens]

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
        eval_run_dir = os.path.normpath(config['paths']['eval_run_dir'])
        screen_shot_dir = os.path.join(eval_run_dir, 'screenshots')

        # Logging paths and current working directory
        logger.debug(f"Current working directory: {os.getcwd()}")
        logger.debug(f"Screenshot directory: {screen_shot_dir}")
        logger.debug(f"Evaluation run directory: {eval_run_dir}")

        # Create directories for screenshots
        os.makedirs(screen_shot_dir, exist_ok=True)
        file_name_png = file_name.split(".")[0]  # remove .spec.ts
        screenshot_path = os.path.join(screen_shot_dir, f"{file_name_png}.png")
        # Replace backslashes with forward slashes
        #screenshot_path = screenshot_path.replace("\\", "/")
        logger.debug(f"Screenshot path: {screenshot_path}")

        screenshot_code = f"  await page.screenshot({{ path: '{screenshot_path}' }});\n"
        time_out = 30000
        time_out_code = f"  test.setTimeout({time_out});\n"

        generated_code = generated_code.split("\n")

        #### insert screenshot code
        # Find the position to insert the screenshot command
        assert type(generated_code) == type([])
        insert_position = 0
        for i, line in enumerate(generated_code):
            if 'async' in line and 'test(' in line:
                insert_position = i + 1
                break

        # Insert the timeout code and screenshot command
        generated_code.insert(insert_position, time_out_code)
        found_position = 0
        last_await_position = 0
        for i, line in enumerate(generated_code):
            if "await page.close()" in line or "await context.close()" in line or "await browser.close()" in line:
                found_position = 1
                insert_position = i
                break
            if "await" in line:
                last_await_position = i + 1  # position after the last "await" line

        if found_position == 0:
            insert_position = last_await_position

        # Insert the screenshot and HTML extraction commands
        generated_code.insert(insert_position, screenshot_code)
        ####

        # Ensure the directory for the temp_path exists
        temp_dir = os.path.join(eval_run_dir, "test_script")
        os.makedirs(temp_dir, exist_ok=True)
        logger.debug(f"Created temp directory: {temp_dir}")

        temp_path = os.path.join(temp_dir, file_name)
        logger.debug(f"Temp file path: {temp_path}")

        # Save updated test code to a temporary file
        try:
            with open(temp_path, 'w', encoding="utf-8") as file:
                file.write("\n".join(generated_code))
            logger.debug(f"File {temp_path} created successfully.")
        except Exception as e:
            logger.error(f"Failed to create the file {temp_path}. Error: {e}")
            return 0

        # Small delay to account for file system delays
        time.sleep(1)

        # Run the Playwright test
        try:
            logger.debug(f"Current working directory: {os.getcwd()}")
            result = os.system(f"npx playwright test {temp_path} --config=config/playwright.config.ts")
            score = 1 if result == 1 else 0
        except Exception as e:
            logger.error(f"Failed to run Playwright test. Error: {e}")
            return 0

        # Delete temp file after test run if defined in config
        if config.get('evaluation', {}).get('delete_temp_files', False):
            try:
                os.remove(temp_path)
                logger.debug(f"Deleted temp file {temp_path}.")
            except Exception as e:
                logger.error(f"Failed to delete temp file {temp_path}. Error: {e}")

        logger.debug(f"Playwright test result: {result}")
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
