from src.data.html_processor import extract_html_info
from src.data.code_processor import parse_code
from src.data.image_processor import extract_text_from_image
from src.input_builder import create_input
from src.ui_tests.test_generation import generate_code, generate_code_on_cluster
from src.evaluation.metrics import calculate_scores

import logging
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level=logging.DEBUG)  # Change to DEBUG for more verbosity

# Constants
MAX_LENGTH = 300  # Maximum length of the input texts for the LLM


def main(html_path: str, image_path: str, precondition_path: str, description: str, validation_path: str = None):
    """Predict a UI test case with an LLM with given context as input (HTML, image, precondition, description).

    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param description: The description of the test case to generate.
    :param validation_path: The path to the validation file (for multimodal model).
    :return: Scores for the generated test case (if validation_path and model are provided).
    """
    logger.info("Loading context...")
    html_text = extract_html_info(html_path, concat_mod='single')
    image_text = extract_text_from_image(image_path, max_length=MAX_LENGTH)
    precondition_text = parse_code(precondition_path)
    logger.info("Context loaded successfully.")

    logger.info("Creating input prompt...")
    input = create_input(html_text, precondition_text, image_text, description, model_type='text_based')
    logger.info("Input prompt created successfully.")
    logger.debug(f"Input prompt:\n{input}")

    logger.info("Generating test case...")
    current_id = html_path.split("\\")[-1].split(".")[0]
    current_test, current_step = current_id.split("_")
    next_id = f"{current_test}_{int(current_step) + 1}"
    generated_code = generate_code(input, file_name=f"{next_id}.pred", model_name="gpt2")
    logger.info(f"Test case generated for {next_id}.")

    if validation_path:
        test_case = {"generated_code": generated_code, "validation_code": parse_code(validation_path), "precondition_code": precondition_text}
        scores = calculate_scores(test_cases=[test_case], test_name= next_id)

        return scores


async def main_cluster(html_path: str, image_path: str, precondition_path: str, description: str,
                       validation_path: str = None, model=None):
    """Predict a UI test case using a multimodal LLM with given context as input (HTML, image, precondition, description).

    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param description: The description of the test case to generate.
    :param validation_path: The path to the validation file (for multimodal model).
    :param model: The model to use (for multimodal model).
    :return: Scores for the generated test case (if validation_path is provided).
    """
    logger.info("Loading context...")
    html_text = extract_html_info(html_path, concat_mod='all')
    precondition_text = parse_code(precondition_path)
    logger.info("Context loaded successfully.")

    logger.info("Creating input prompt...")
    input = create_input(html_text, precondition_text, None, description, model_type='multimodal')
    logger.info("Input prompt created successfully.")
    logger.debug(f"Input prompt:\n{input}")

    logger.info("Generating test case...")
    current_id = html_path.split("\\")[-1].split(".")[0]
    current_test, current_step = current_id.split("_")
    next_id = f"{current_test}_{int(current_step) + 1}"

    input_multimodal = {"prompt": input, "image_path": image_path}
    generated_code = await generate_code_on_cluster(input_model=input_multimodal, file_name=f"{next_id}.pred", model=model)
    logger.info(f"Test case generated for {next_id}.")

    if validation_path:
        test_case = {"generated_code": generated_code, "validation_code": parse_code(validation_path), "precondition_code": precondition_text}
        scores = calculate_scores(test_cases=[test_case])

        return scores

# TODO: Add main function to run the script
