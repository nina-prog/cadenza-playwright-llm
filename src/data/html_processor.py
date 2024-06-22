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


def html_extract_links(html_path: str) -> str:
    """ Parse the HTML content from a file.

    :param html_path: The path to the HTML file.
    :return: The text content of the HTML file.
    """
    with open(html_path, "r", encoding='utf-8') as file:
        html_content = file.read()
    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    links = soup.find_all("a")
    links_by_text = get_links_by_text(links)
    # TODO: Add more link retrival methods and put them together to one string

    logger.debug(f"HTML content parsed successfully. - Length of string: {len(links_by_text)}")

    return links_by_text


def get_links_by_text(links: list) -> str:
    truncated_link_list = [get_only_text(link) for link in links]
    truncated_link_list = replace_characters_in_list(truncated_link_list, characters='\n', replacement=' ')
    truncated_link_list = remove_every_unnecessary_whitespaces(truncated_link_list)
    truncated_link_list = remove_empty_elements(truncated_link_list)
    links_by_text = ', '.join(truncated_link_list)
    return links_by_text


def get_only_text(link):
    temp_str = str(link)
    while "<" in temp_str or ">" in temp_str:
        start_index = temp_str.find("<")
        end_index = temp_str.find(">") + 1
        temp_str = temp_str[:start_index] + temp_str[end_index:]
    return temp_str


def replace_characters_in_list(l: list[str], characters: str, replacement: str) -> list[str]:
    return [element.replace(characters, replacement) for element in l]


def remove_every_unnecessary_whitespaces(l: list[str]) -> list[str]:
    return [' '.join(remove_empty_elements(element.split(' '))) for element in l]


def remove_empty_elements(l: list[str]) -> list[str]:
    return list(filter(lambda x: x != '', l))
