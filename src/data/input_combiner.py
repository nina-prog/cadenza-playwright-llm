""" This module contains functions to combine the input for the use in the LLM. """
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def create_combined_input(html_text: str, image_text: str, precondition_text: str, prompt: str):
    """ Combine the input data into a single string for the LLM.

    :param html_text: The text content of the HTML file.
    :param image_text: The text content of the image file.
    :param precondition_text: The text content of the Python file.
    :param prompt: The prompt for the LLM.
    :return: The combined input string.
    """
    combined_input = f"{prompt}\n\n" \
                     f"HTML Content:\n{html_text}\n\n" \
                     f"Image Content:\n{image_text}\n\n" \
                     f"Playwright Test Precondition:\n{precondition_text}"
    return combined_input
