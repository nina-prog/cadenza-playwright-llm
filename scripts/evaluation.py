""" This script is to evaluate multiple generated test cases. """
import os
import pandas as pd

from src.data.code_processor import parse_code
from src.evaluation.metrics import calculate_scores, aggregate_scores
from src.utils.helpers import parse_args, parse_config

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level="DEBUG")  # Change to DEBUG for more verbosity


def evaluate_test_cases(cfg: dict) -> pd.DataFrame:
    """Evaluate multiple generated test cases and save the results to a file.

    :param cfg: The configuration dictionary.
    :return: The results as a pandas DataFrame.
    """
    pred_dir = cfg["paths"]["prediction_dir"]

    logger.info("Calculating scores...")

    test_cases = []
    test_ids = []
    for file in os.listdir(pred_dir):
        if file.endswith(".spec.ts"):
            current_id = file.split(".")[0]
            current_test, current_step = current_id.split("_")
            # Skip the default test step as it is only a placeholder for the first step (1) of a test case in order to have a precondition
            if current_step == "0":
                continue
            prev_id = f"{current_test}_{int(current_step) - 1}"
            test_case = {
                "test_case": f"{current_test}",
                "test_step": f"{current_step}",
                "generated_code": parse_code(pred_dir + file),
                "validation_code": parse_code(cfg['dataloading']['test_script_dir'] + f"{current_id}.spec.ts"),
                "precondition_code": parse_code(cfg['dataloading']['test_script_dir'] + f"{prev_id}.spec.ts")
            }
            test_cases.append(test_case)
            test_ids.append(current_id)
    logger.debug(f"Test cases: {test_cases}")

    scores = calculate_scores(test_cases=test_cases, config=cfg)
    logger.info(f"Scores calculated.")
    logger.debug(f"Scores: {scores}")

    logger.info("Aggregating...")

    agg_scores = aggregate_scores(scores)
    logger.info(f"Scores aggregated: {agg_scores}")

    # To pickle
    df = pd.DataFrame(test_ids, columns=["file_id"])
    df["test_case"] = [f"{test_id.split('_')[0]}" for test_id in test_ids]
    df["test_step"] = [f"{test_id.split('_')[1]}" for test_id in test_ids]
    for metric in scores.keys():
        df[metric] = scores[metric]

    # Save to file
    timestamp = pd.Timestamp.now().strftime("%Y%m%d-%H%M%S")
    filepath = cfg["paths"]["scores_dir"] + f"eval_scores_{timestamp}.pkl"
    df.to_pickle(filepath)
    logger.info(f"Results saved to {filepath}")

    return df


if __name__ == "__main__":

    # Parse arguments and config
    args = parse_args()
    cfg, cfg_path = parse_config(args)

    # Evaluate test cases
    evaluate_test_cases(cfg)
