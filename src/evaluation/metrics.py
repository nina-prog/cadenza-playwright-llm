from typing import Union, List
from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction
from Levenshtein import distance
import esprima

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level="DEBUG")  # Change to DEBUG for more verbosity


def aggregate_scores(scores: dict) -> dict:
    """ This method aggregates the given scores. It supports multiple scores: weighted bleu, success rate,
    and levenshtein distance. Note that the keys of the given scores must be the same.

    :param scores: The scores to aggregate.
    :return: The aggregated scores of the given scores.
    """
    metrics = scores.keys()

    if len(set([len(scores[metric]) for metric in metrics])) != 1:
        raise ValueError("The given scores must have the same length.")

    agg_scores = {}
    for metric in metrics:
        try:
            if metric == 'weighted bleu' or metric == 'success rate' or metric == 'levenshtein distance':
                if all(scores[metric]):
                    agg_scores[metric] = sum(scores[metric]) / len(scores[metric])
                else:
                    agg_scores[metric] = None
                    logger.warning(f"Missing {metric} scores. Skipping...")
            else:
                agg_scores[metric] = None
                logger.warning(f"Unknown metric: {metric}. Skipping...")
        except Exception as e:
            agg_scores[metric] = None
            logger.error(f"Error aggregating {metric}: {e}")

    return agg_scores


def calculate_scores(test_cases: List[dict], metrics=None) -> dict:
    """Calculate scores for given metrics across multiple test cases.

    :param test_cases: List of dictionaries, each containing 'generated_code', 'validation_code',
                       'precondition_code', etc.
    :param metrics: List of metrics to calculate the scores for, e.g., ['weighted bleu', 'success rate', 'levenshtein distance']
    :return: Dictionary containing scores for each metric across all test cases.
    """
    if metrics is None:
        metrics = ['weighted bleu', 'success rate', 'levenshtein distance']

    scores = {metric: [] for metric in metrics}

    for test_case in test_cases:
        generated_code = test_case.get('generated_code', '')
        validation_code = test_case.get('validation_code', '')
        precondition_code = test_case.get('precondition_code', '')

        for metric in metrics:
            try:
                match metric:
                    case 'weighted bleu':
                        scores[metric].append(calculate_weighted_bleu_score(generated_code, validation_code, precondition_code))
                    case 'success rate':
                        scores[metric].append(calculate_success_rate(generated_code))
                    case 'levenshtein distance':
                        scores[metric].append(calculate_levenshtein_distance(generated_code, validation_code))
                    case _:
                        scores[metric].append(None)
                        logger.warning(f"Unknown metric: {metric}. Skipping...")
            except Exception as e:
                scores[metric].append(None)
                logger.error(f"Error calculating {metric} for test case: {e}")

    return scores


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


# TODO: Implement calculate_success_rate
def calculate_success_rate(generated_code: str):
    pass
    # try to run genrated playwrigth code and if successfull then true 1 as success rate


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
