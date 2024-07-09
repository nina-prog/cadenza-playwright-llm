""" This module contains functions to process HTML files. """
from bs4 import BeautifulSoup
from typing import Union
import json
from collections import defaultdict

from src.utils.helpers import truncate_text, clean_string
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def parse_html(html_path: str, max_length: int = 200) -> str:
    """ Parse the HTML content from a file using BeautifulSoup. It extracts the text content and truncates it to the given maximum length.

    :param max_length: The maximum length of the text.
    :param html_path: The path to the HTML file.
    :return: The text content of the HTML file.
    """
    # Load HTML content from a file
    with open(html_path, "r") as file:
        html_content = file.read()

    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    # Get the text content
    html_text = soup.get_text(strip=True)

    # Truncate the text to the maximum length
    html_text = truncate_text(html_text, max_length=max_length)

    logger.debug(f"HTML content parsed successfully. - Lines of Code: {len(html_text.splitlines())}")

    return html_text


def extract_elements(file_path: str, tag: str, attributes: list, key_checks: list, max_attr_length: int = 40) -> list:
    """
    Extracts and cleans specified attributes from an HTML element and filters elements based on key_checks.

    :param file_path: The path to the HTML file.
    :param tag: The HTML tag to search for.
    :param attributes: The list of attributes to extract from each tag.
    :param key_checks: The list of keys to check for inclusion in the final list.
    :param max_attr_length: The maximum length of each attribute's value.
    :return: A list of dictionaries containing the filtered attributes of the elements.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    elements = soup.find_all(tag)
    logger.debug(f"Found {len(elements)} {tag} elements.")

    elements_filtered = []
    for element in elements:
        attrs = {
            attr: element.text if attr == 'text' else element.get(attr) for attr in attributes
        }
        # Filter out None values
        attrs = {k: v for k, v in attrs.items() if v}
        # Clean extracted strings and join class attributess
        attrs_cleaned = {k: clean_string(v) if k != 'class' else ' '.join(v) for k, v in attrs.items()}
        # Filter out empty strings
        attrs_filtered = {k: v for k, v in attrs_cleaned.items() if v != ''}
        # Remove keys with too long attributes
        keys_to_delete = [k for k, v in attrs_filtered.items() if len(v) > max_attr_length]
        for k in keys_to_delete:
            del attrs_filtered[k]
        # Remove elements that don't have any of the key_checks
        if any(attrs_filtered.get(key) for key in key_checks):
            elements_filtered.append(attrs_filtered)

    logger.debug(f"Extracted {len(elements_filtered)} {tag} elements.")

    return elements_filtered


def format_elements(elements_ls: list, element_type: str, concat_mod: str = 'single') -> str:
    """Formats extracted elements into a string based on concat_mod."""
    if not elements_ls:
        return ""

    if concat_mod == 'single':
        elements_str = '\n'.join(json.dumps(element, ensure_ascii=False) for element in elements_ls)
        return f"{element_type}s: \n{elements_str}\n"

    elif concat_mod == 'all':
        # Initialize defaultdict with list
        combined_attr = defaultdict(list)

        # Populate the defaultdict
        for element in elements_ls:
            for k, v in element.items():
                combined_attr[k].append(v)

        # Convert lists to comma-separated strings and format output
        combined_attrs_str = '\n'.join(
            f"{element_type} {k}s: {', '.join(v)}" if k != 'class' else f"{element_type} {k}es: {', '.join(v)}"
            for k, v in combined_attr.items()
        )

        return f"{element_type}s: \n{combined_attrs_str}\n"


def extract_html_info(file_path: str, max_length: Union[int, None] = None, max_attr_length: int = 40,
                      concat_mod: str = 'single') -> str:
    """
    Extracts relevant information from an HTML file.

    :param file_path: The path to the HTML file.
    :param max_length: The maximum length of the extracted text.
    :param max_attr_length: The maximum length of each item of the extracted information.
    :param concat_mod: The mode of concatenation ('single' or 'all').
    :return: A formatted string containing the extracted HTML elements.
    """
    buttons_ls = extract_elements(file_path, tag='button', attributes=['text', 'id', 'class', 'name'],
                                  key_checks=['text', 'id', 'name'], max_attr_length=max_attr_length)
    inputs_ls = extract_elements(file_path, tag='input',
                                 attributes=['id', 'class', 'name', 'aria-label', 'type', 'placeholder'],
                                 key_checks=['id', 'name', 'aria-label'], max_attr_length=max_attr_length)
    links_ls = extract_elements(file_path, tag='a', attributes=['text', 'id', 'class'], key_checks=['text', 'id'],
                                max_attr_length=max_attr_length)

    html_elements = format_elements(buttons_ls, 'Button', concat_mod)
    html_elements += format_elements(inputs_ls, 'Input', concat_mod)
    html_elements += format_elements(links_ls, 'Link', concat_mod)

    if max_length:
        html_elements = truncate_text(html_elements, max_length)

    return html_elements


def html_extract_links(html_path: str) -> str:
    """Extract and format text content of links from an HTML file.

    :param html_path: The path to the HTML file.
    :return: A comma-separated string of link texts.
    """
    with open(html_path, "r", encoding='utf-8') as file:
        html_content = file.read()

    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all <a> tags (links)
    links = soup.find_all("a")

    # Extract text from each link
    link_texts = [get_only_text(link) for link in links]

    # Clean up text: replace newline characters, remove unnecessary whitespace, and filter out empty elements
    link_texts = [text.replace('\n', ' ').strip() for text in link_texts]
    link_texts = [text for text in link_texts if text]  # Remove empty texts

    # Join cleaned link texts with comma separator
    links_by_text = ', '.join(link_texts)

    return links_by_text


def get_only_text(link):
    """Extract visible text from an HTML link element.

    :param link: The HTML link element.
    :return: The visible text of the link.
    """
    temp_str = str(link)
    while "<" in temp_str or ">" in temp_str:
        start_index = temp_str.find("<")
        end_index = temp_str.find(">") + 1
        temp_str = temp_str[:start_index] + temp_str[end_index:]
    return temp_str
