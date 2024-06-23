""" Helper functions for the application. """
import re


def truncate_text(text: str, max_length: int) -> str:
    """ Truncate text to a maximum length.

    :param text: The text to truncate.
    :param max_length: The maximum length of the text.
    :return: The truncated text.
    """
    return text[:max_length] + (text[max_length:] and '...')


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
