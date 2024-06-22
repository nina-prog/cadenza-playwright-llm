""" This module contains functions to process Python files. """
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def parse_python(precondition_path: str) -> str:
    """ Parse the Python code from a file.

    :param precondition_path: The path to the Python file.
    :return: The text content of the Python file.
    """
    with open(precondition_path, "r", encoding='utf-8') as file:
        python_code = file.read()
    logger.debug(f"Python code parsed successfully. - Lines of Code: {len(python_code.splitlines())}")

    return python_code
