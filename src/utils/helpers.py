""" Helper functions for the application. """
import argparse
import re
from src.data.data_loading import load_config

from src.utils.logger import setup_logger
import esprima

logger = setup_logger(__name__, level="DEBUG")  # Change to DEBUG for more verbosity


def parse_args():
    """
    Function that parses the arguments.

    :return: Parsed arguments
    """
    # Parse arguments
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", help="Path to the config file", type=str, default="../config/config.yaml")
    args = parser.parse_args()

    return args


def parse_config(args):
    """
    Parses the config file, given the arguments.

    :param args: Parsed arguments
    :return: dict: parsed config file, str: path to the config file
    """
    # Load config file
    cfg = load_config(args.config)
    cfg_path = args.config

    return cfg, cfg_path


def truncate_text(text: str, max_length: int) -> str:
    """ Truncate text to a maximum length.

    :param text: The text to truncate.
    :param max_length: The maximum length of the text.
    :return: The truncated text.
    """
    return text[:max_length] + (text[max_length:] and '\n...(truncated)')


def clean_string(input_string):
    """ Clean a string by stripping leading and trailing whitespace and removing line breaks.

    :param input_string: The string to clean.
    :return: The cleaned string.
    """
    # Strip leading and trailing whitespace
    stripped_string = input_string.strip()

    # Remove all line breaks using regular expressions
    cleaned_string = re.sub(r'[\r\n]+', ' ', stripped_string)

    return cleaned_string


def strip_code_fence(code_block: str, programming_language: str) -> str:
    """ Strip the code block from the generated text.

    :param code_block: The generated text.
    :param programming_language: The programming language of the code.
    :return: The code block.
    """
    start_delim = "```" + programming_language
    end_delim = "```"

    start_index = code_block.find(start_delim)
    end_index = code_block.rfind(end_delim)
    if start_index == -1 or end_index == -1 or end_index <= start_index:
        raise ValueError("Invalid or missing code block delimiters")

    return code_block[start_index + len(start_delim):end_index].strip()


def get_key_or_default(dictionary: dict, key: str, default: any) -> any:
    """ Get a value from a dictionary by key or return a default value if the key is not present.

    :param dictionary: The dictionary to get the value from.
    :param key: The key to get the value for.
    :param default: The default value to return if the key is not present.
    :return: The value for the key or the default value if the key is not present.
    """
    if key not in dictionary:
        logger.info(f"'{key}' not defined. Using default: {default}")
    return dictionary.get(key, default)


def get_previous_id(id: str) -> str:
    """Get the ID of the previous step of a test case.

    :param id: The ID of the current step.
    :return: The ID of the previous step, or an empty string if invalid.
    """
    try:
        test, step = map(int, id.split('.'))
        if step > 1:
            return f"{test}.{step - 1}"
        elif step == 1: # Now is able to work with step X.1 so this special case will be supported as long as the db is updated accordingly
            return f"{test}.{step - 1}"
        else:
            logger.warning(f"Test {test} has no previous step. Cannot retrieve ID.")
            return ""
    except ValueError:
        logger.error(f"Invalid ID format: {id}")
        return ""


def tokenize_code(code: str):
    """ Attempt to tokenize code and return tokens up to the first error.

    :param code: The code to tokenize.
    :return: A list of tokens and the error that occurred, if any.
    """
    try:
        tokens = esprima.tokenize(code)
        return [str(token) for token in tokens], None
    except Exception as e:
        partial_tokens = []
        code_lines = code.split('\n')
        for line in code_lines:
            try:
                partial_tokens.extend([str(token) for token in esprima.tokenize(line)])
            except Exception:
                break
        return partial_tokens, e
