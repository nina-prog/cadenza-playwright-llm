""" This module contains functions to combine the input for the use in the LLM. """
from src.data.html_processor import extract_html_info
from src.data.code_processor import parse_code
from src.data.image_processor import extract_text_from_image
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change to 'INFO' for less verbosity


def create_input_prompt(html_path: str, image_path: str, precondition_path: str, description: str, config: dict) -> str:
    """ Combine the input data into a single string for the multimodal LLM.

    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param description: The description of the UI test.
    :param config: The configuration dictionary.
    :return: The combined input data.
    """
    # Extract settings from config
    preprocessing = config.get('preprocessing', {})
    html_settings = preprocessing.get('html', {})
    image_settings = preprocessing.get('image', {})
    input_settings = config.get('input_settings', {})
    model_type = input_settings.get('model_type', 'multimodal')
    template_name = input_settings.get('template_name', 'template_1')
    include_html = input_settings.get('include_html', True)
    include_screenshot = input_settings.get('include_screenshot', True)

    logger.info("Loading context...")

    precondition_text = parse_code(precondition_path)
    html_text = extract_html_info(
        file_path=html_path,
        max_length=html_settings.get('max_length', 0),
        max_attr_length=html_settings.get('max_attr_length', 0),
        concat_mod=html_settings.get('concat_mod', '')
    )
    image_text = ""
    if model_type == 'text_based':
        image_text = extract_text_from_image(
            image_path,
            max_length=image_settings.get('max_length', 0)
        )

    logger.info("Context loaded successfully.")

    logger.info("Creating input prompt...")

    # Select template
    templates = config.get('templates', {})
    selected_template = templates.get(template_name)
    if not selected_template:
        logger.warning(f"Template '{template_name}' not found. Using empty template.")
        return {}

    # Create the data part of the input prompt
    data_prompt = ""
    if include_html:
        data_prompt += "### Simplified HTML Content:\n" + f"{html_text}\n\n"
    data_prompt += (
        "### Playwright Test Precondition:\n" + f"{precondition_text}\n\n"
        "### UI Test Description:\n" + f"{description}\n\n"
    )
    if include_screenshot:
        if model_type == 'text_based':
            data_prompt += "### Screenshot Description:\n" + f"{image_text}\n\n"
        elif model_type == 'multimodal':
            data_prompt += "### Screenshot:\n <image>\n\n"

    # Create the context part of the input prompt
    context_prompt = selected_template.get('base_context_prompt', '')
    context_addition = selected_template.get(f'{model_type}_addition', '')
    context_prompt += context_addition

    # Combine the data and context parts
    input_prompt = data_prompt + context_prompt

    logger.info("Input prompt created successfully.")
    logger.debug(f"Input prompt: \n{input_prompt}")

    return input_prompt
