""" This module contains functions to combine the input for the use in the LLM. """
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def create_combined_input(html_text: str, image_text: str, precondition_text: str, description: str):
    """ Combine the input data into a single string for the LLM.

    :param html_text: The text content of the HTML file.
    :param image_text: The text content of the image file.
    :param precondition_text: The text content of the Python file.
    :param description: The description of the test case to generate.
    :return: The combined input string.
    """
    combined_input = (
        "You are a test automation script writer. "
        "Your task is to create a Playwright test script for the given webpage. "
        "Below are the details of the webpage. Use this information to generate a complete Python Playwright test "
        "script following the instructions.\n\n"

        "### Website HTML Elements:\n"
        f"{html_text}\n\n"

        "### Current Website Screenshot Description:\n"
        f"{image_text}\n\n"

        "### Playwright Test Precondition Code:\n"
        f"{precondition_text}\n\n"

        "### Test Description:\n"
        f"{description}\n\n"

        "### Instructions:\n"
        "1. Use the precondition code to set up the initial state. Just add new code to it below the given one.\n"
        "2. Follow the steps in the test description to perform actions and verify outcomes.\n"
        "3. Ensure the generated script is in Python and uses Playwright's sync API.\n"

        "Generate the Playwright test script below:\n"
    )

    return combined_input


def create_combined_input_for_multimodal_model(html_text: str, precondition_text: str, description: str):
    """ Combine the input data into a single string for the LLM.

    :param description: The description what the model should do in general.
    :param html_text: The text content of the HTML file.
    :param precondition_text: The text content of the Python file.
    :param prompt: The prompt for the LLM.
    :return: The combined input string.
    """
    combined_input = (
        "You are a test automation script writer. "
        "Your task is to create a Playwright test script for the given webpage. "
        "Below are the details of the webpage. Use this information to generate a complete Python Playwright test "
        "script following the instructions.\n\n"

        "### Website HTML Elements:\n"
        f"{html_text}\n\n"

        "### Current Website Screenshot:\n"
        f"<image>\n\n"

        "### Playwright Test Precondition Code:\n"
        f"{precondition_text}\n\n"

        "### Test Description:\n"
        f"{description}\n\n"

        "### Instructions:\n"
        "1. Use the precondition code to set up the initial state. Just add new code to it below the given one.\n"
        "2. Follow the steps in the test description to perform actions and verify outcomes.\n"
        "3. Ensure the generated script is in Python and uses Playwright's sync API.\n"

        "Generate the Playwright test script below:\n"
    )

    return combined_input
