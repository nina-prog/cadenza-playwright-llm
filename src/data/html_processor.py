""" This module contains functions to process HTML files. """
from bs4 import BeautifulSoup

from src.utils.helpers import truncate_text

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG') # Change to 'INFO' for less verbosity


def parse_html(html_path: str, max_length: int = 200) -> str:
    """ Parse the HTML content from a file.

    :param max_length: The maximum length of the text.
    :param html_path: The path to the HTML file.
    :return: The text content of the HTML file.
    """
    with open(html_path, "r", encoding='utf-8') as file:
        html_content = file.read()
    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')
    # Get the text content
    text_content = soup.get_text()
    # Truncate the text to the maximum length
    text_content = truncate_text(text_content, max_length=max_length)

    logger.debug(f"HTML content parsed successfully. - Lines of Code: {len(text_content.splitlines())}")

    return text_content
