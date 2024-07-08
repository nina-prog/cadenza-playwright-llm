""" This module contains functions to combine the input for the use in the LLM. """
from typing import Union
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def create_input(html_text: str, precondition_text: str, image_text: Union[str, None], description: str, model_type: str = 'multimodal') -> str:
    """ Combine the input data into a single string for the multimodal LLM.

    :param html_text: The text content of the HTML file.
    :param precondition_text: The precondition code.
    :param image_text: The text content of the image.
    :param description: The description of the UI test.
    :param model_type: The type of the model ('text_based' or 'multimodal').
    :return: The combined input for the LLM.
    """
    data_prompt = (
        "### Simplified HTML Content:\n"
        f"{html_text}\n\n"
        
        "### Playwright Test Precondition:\n"
        f"{precondition_text}\n\n"
        
        "### UI Test Description:\n"
        f"{description}\n\n"
    )
    if model_type == 'text_based':
        data_prompt += "### Screenshot Description:\n" + f"{image_text}\n\n"
    if model_type == 'multimodal':
        data_prompt += "### Screenshot:\n <image>\n\n"

    context_prompt = (
        "### Task:\n"
        "You are a test automation script writer. I will describe a UI test in German and you will generate "
        "Playwright test code for the given webpage. Strictly follow these instructions:\n"
        "1. Don't explain the code, just generate the code block itself.\n"
        "2. You get some HTML elements and its attributes from the website. You can use playwright locators to find "
        "the elements by their attributes.\n"
        "3. Use the precondition code to set up the initial state. You must continue the code.\n"
        "4. Follow the steps in the ui test description to perform actions on the website.\n"
    )
    if model_type == 'text_based':
        context_prompt += "5. Use the screenshot description to understand the context of the test.\n"
    if model_type == 'multimodal':
        context_prompt += "5. Use the screenshot to understand the context of the test.\n"
        context_prompt += "Assistant: "

    return data_prompt + context_prompt
