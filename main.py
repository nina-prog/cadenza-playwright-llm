from src.data.code_processor import parse_code
from src.input_builder import create_input_prompt
from src.ui_tests.test_generation import generate_code, generate_code_on_cluster
from src.evaluation.metrics import calculate_scores
from src.utils.helpers import parse_args, parse_config
from src.data.data_loading import load_config

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level="DEBUG")  # Change to DEBUG for more verbosity


def main(html_path: str, image_path: str, precondition_path: str, description: str, config_file: str,
         validation_path: str = None):
    """Predict a UI test case with an LLM with given context as input (HTML, image, precondition, description).

    :param config: The configuration dictionary.
    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param description: The description of the test case to generate.
    :param validation_path: The path to the validation file (for multimodal model).
    :return: Scores for the generated test case (if validation_path and model are provided).
    """
    # Load configuration
    cfg = load_config(config_file)

    logger.info("Creating input prompt...")
    input = create_input_prompt(html_path, image_path, precondition_path, description, config=cfg)
    logger.info("Input prompt created successfully.")
    logger.debug(f"Input prompt: \n{input}")

    logger.info("Generating test case...")
    current_id = html_path.split("\\")[-1].split(".")[0]
    current_test, current_step = current_id.split("_")
    next_id = f"{current_test}_{int(current_step) + 1}"
    generated_code = generate_code(input, file_name=f"{next_id}.pred", model_name="gpt2")
    logger.info(f"Test case generated for {next_id}.")

    if validation_path:
        test_case = {"generated_code": generated_code,
                     "validation_code": parse_code(validation_path),
                     "precondition_code": parse_code(precondition_path)}
        scores = calculate_scores(test_cases=[test_case])

        return scores


def main_cluster(html_path: str, image_path: str, precondition_path: str, description: str, config: dict,
                 validation_path: str = None, model=None):
    """Predict a UI test case using a multimodal LLM with given context as input (HTML, image, precondition, description).

    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param description: The description of the test case to generate.
    :param config: The configuration file.
    :param validation_path: The path to the validation file (for multimodal model).
    :param model: The model to use (for multimodal model).
    :return: Scores for the generated test case (if validation_path is provided).
    """

    logger.info("Creating input prompt...")
    input = create_input_prompt(html_path, image_path, precondition_path, description, config=config)
    logger.info("Input prompt created successfully.")
    logger.debug(f"Input prompt:\n{input}")

    logger.info("Generating test case...")
    current_id = validation_path.split("/")[-1].split(".")[0]
    current_test, current_step = current_id.split("_")
    next_id = f"{current_test}_{int(current_step)}"

    input_multimodal = {"prompt": input, "image_path": image_path}
    generated_code = generate_code_on_cluster(input_model=input_multimodal, file_name=f"{next_id}.spec", model=model)
    logger.info(f"Test case generated for {next_id}.")

    evaluation = config['evaluation'].get('activate', True)
    if evaluation:
        test_case = {"generated_code": generated_code,
                     "validation_code": parse_code(validation_path),
                     "precondition_code": parse_code(precondition_path)}
        scores = calculate_scores(test_cases=[test_case], test_case=current_test, test_step=current_step)

        return scores

# TODO: Add main function to run the script
