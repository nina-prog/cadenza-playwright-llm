""" This module contains the functions to create data samples for finetuning a multimodal LLM (e.g. Llava)."""
import json
from datetime import datetime

from src.input_builder import create_input_prompt
from src.data.code_processor import parse_code, parse_code_with_demark

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change to 'INFO' for less verbosity


def create_finetuning_data_sample(html_path: str, image_path: str, precondition_path: str, description: str, validation_path: str, config: dict) -> str:
    """ Create data sample for finetuning a multimodal LLM (Llava https://github.com/haotian-liu/LLaVA.git).

    :param html_path: The path to the HTML file.
    :param image_path: The path to the image file.
    :param precondition_path: The path to the precondition file.
    :param description: The description of the UI test.
    :param validation_path: The path to the validation file.
    :return: The combined input and expected output for the LLM Finetuning.
    """
    input = create_input_prompt(html_path, image_path, precondition_path, description, config=config)

    # Get id for the current test case
    current_id = validation_path.split("\\")[-1].split(".")[0] # Changed to validation path to better reflect the step
    current_test, current_step = current_id.split("_")
    # Add 0s as filler
    updated_test = "0" + current_test if int(current_test) < 10 else current_test
    updated_step = "0" + current_step if int(current_step) < 10 else current_step
    updated_id = f"{updated_test}_{updated_step}"

    logger.info("Combining input and expected output into json finetuning data format...")

    conversation = {
        "id": f"{updated_id}",
        "image": image_path,
        "conversations": [
            {
                "from": "human",
                "value": input
            },
            {
                "from": "gpt",
                "value": parse_code_with_demark(validation_path) # parse_code(validation_path)
            }
        ]
    }

    logger.info("Finetuning conversation created successfully.")
    logger.debug(f"Conversation: \n{conversation}")

    return conversation


def save_finetuning_data_as_json(data: list, output_dir: str = './data/finetuning', name: str = 'default'):
    """Save the finetuning data to a JSON file.

    :param data: List of finetuning data samples.
    :param name: The name of the output file to destinguish between test, validation and training.
    :param output_dir: Directory to save the JSON file.
    """
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    size = len(data)
    output_path = f'{output_dir}/s{size}_finetuning_data_{name}_{timestamp}.json'

    with open(output_path, 'w', encoding="utf8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    logger.info(f"Finetuning data saved as JSON file: {output_path}")
