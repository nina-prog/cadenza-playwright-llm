""" Helper functions for the application. """
import re


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
