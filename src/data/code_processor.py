""" This module contains functions to process code files. """
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change to 'INFO' for less verbosity


def parse_code(precondition_path: str) -> str:
    """ Parse the code content from a file.

    :param precondition_path: The path to the Python file.
    :return: The code content of a code file.
    """
    with open(precondition_path, "r", encoding='utf-8') as file:
        code = file.read()
    logger.debug(f"Code parsed successfully. - Lines of Code: {len(code.splitlines())}")

    return code
