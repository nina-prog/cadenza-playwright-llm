""" This script is to evaluate multiple generated test cases. """
import os
import pandas as pd

from src.data.code_processor import parse_code
from src.evaluation.metrics import calculate_scores, aggregate_scores
from src.utils.helpers import parse_args, parse_config

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level="INFO")  # Change to DEBUG for more verbosity


def evaluate_test_cases():
    # Parse arguments and config
    args = parse_args()
    cfg, cfg_path = parse_config(args)

    # Set path prefix
    path_prefix = "../"
    pred_dir = path_prefix + cfg["paths"]["prediction_dir"]

    logger.info("Calculating scores...")

    test_cases = []
    test_ids = []
    for file in os.listdir(pred_dir):
        if file.endswith(".pred.ts"):
            current_id = file.split(".")[0]
            current_test, current_step = current_id.split("_")
            prev_id = f"{current_test}_{int(current_step) - 1}"
            test_case = {
                "generated_code": parse_code(pred_dir + file),
                "validation_code": parse_code(path_prefix + cfg['dataloading']['test_script_dir'] + f"{current_id}.spec.ts"),
                "precondition_code": parse_code(path_prefix + cfg['dataloading']['test_script_dir'] + f"{prev_id}.spec.ts")
            }
            test_cases.append(test_case)
            test_ids.append(current_id)

    scores = calculate_scores(test_cases=test_cases)

    logger.info("Scores calculated. Aggregating...")
    agg_scores = aggregate_scores(scores)
    logger.info(f"Aggregated scores: {agg_scores}")

    # Save results as pickle
    df = pd.DataFrame(test_ids, columns=["file_id"])
    for metric in agg_scores.keys():
        df[metric] = agg_scores[metric]
    timestamp = pd.Timestamp.now().strftime("%Y%m%d-%H%M")
    filepath = path_prefix + cfg["paths"]["scores_dir"] + f"/eval_scores_{timestamp}.pkl"
    df.to_pickle(filepath)
    logger.info(f"Results saved to {filepath}")

    return df


if __name__ == "__main__":
    evaluate_test_cases()
