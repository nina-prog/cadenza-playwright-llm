from src.data.html_processor import parse_html
from src.data.python_processor import parse_python
from src.data.image_processor import extract_text_from_image
from src.data.input_combiner import create_combined_input
from src.ui_tests.test_generation import generate_code

import logging
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level=logging.INFO)  # Change to DEBUG for more verbosity

# Constants
MAX_LENGTH = 100  # Maximum length of the input texts for the LLM


def main(html_path: str, image_path: str, precondition_path: str, prompt: str):
    """ Generate the test case for the next UI test.

    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param prompt: The prompt for the LLM.
    """
    logger.info("Loading context...")
    # Parse HTML and extract image text
    html_text = parse_html(html_path, max_length=MAX_LENGTH)
    image_text = extract_text_from_image(image_path, max_length=MAX_LENGTH)
    # Parse Python precondition
    precondition_text = parse_python(precondition_path)
    # Combine the input for the LLM
    combined_input = create_combined_input(html_text, image_text, precondition_text, prompt)
    logger.info("Context loaded successfully.")

    logger.info("Generating test case...")
    # Get id for test x, since we are using files of test x-1 as input context, we need to get the next test id
    current_id = html_path.split("\\")[-1].split(".")[0]
    current_test, current_step = current_id.split("_")
    next_id = f"{current_test}_{int(current_step) + 1}"
    # Generate the code
    generated_code = generate_code(combined_input, file_name=f"{next_id}.pred", model_name="gpt2")
    logger.info(f"Test case generated for {next_id}.")
    logger.debug("Test case:\n", generated_code)

    # Evaluate the generated test case
    # TODO: Add evaluation code here


if __name__ == "__main__":
    main()
