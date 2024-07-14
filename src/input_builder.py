""" This module contains functions to combine the input for the use in the LLM. """
from typing import Union
from src.utils.logger import setup_logger
from src.data.data_loading import load_config

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def create_input(html_text: str, precondition_text: str, image_text: Union[str, None], description: str, config_file: str) -> str:
    """ Combine the input data into a single string for the multimodal LLM.

    :param html_text: The text content of the HTML file.
    :param precondition_text: The precondition code.
    :param image_text: The text content of the image.
    :param description: The description of the UI test.
    :param config_file: The path to the config file.
    :return: The combined input for the LLM.
    """
    config = load_config()
    input_settings = config.get('input_settings', {})
    templates = config.get('templates', {})

    model_type = input_settings.get('model_type', 'multimodal')
    template_name = input_settings.get('template_name', 'template_1')
    include_html = input_settings.get('include_html', True)
    include_screenshot = input_settings.get('include_screenshot', True)

    selected_template = templates.get(template_name, {})
    if not selected_template:
        logger.warning(f"Template '{template_name}' not found. Using empty template.")

    data_prompt = ""
    if include_html:
        data_prompt += (
            "### Simplified HTML Content:\n"
            f"{html_text}\n\n"
        )
    data_prompt += (
        "### Playwright Test Precondition:\n"
        f"{precondition_text}\n\n"

        "### UI Test Description:\n"
        f"{description}\n\n"
    )
    if include_screenshot:
        if model_type == 'text_based':
            data_prompt += "### Screenshot Description:\n" + f"{image_text}\n\n"
        elif model_type == 'multimodal':
            data_prompt += "### Screenshot:\n <image>\n\n"

    context_prompt = selected_template['base_context_prompt']
    if model_type == 'text_based':
        context_prompt += selected_template['text_based_addition']
    elif model_type == 'multimodal':
        context_prompt += selected_template['multimodal_addition']

    return data_prompt + context_prompt
