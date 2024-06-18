""" Helper functions for the application. """


def truncate_text(text: str, max_length: int) -> str:
    """ Truncate text to a maximum length.

    :param text: The text to truncate.
    :param max_length: The maximum length of the text.
    :return: The truncated text.
    """
    return text[:max_length] + (text[max_length:] and '...')
