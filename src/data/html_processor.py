""" This module contains functions to process HTML files. """
from bs4 import BeautifulSoup
from typing import Union

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


def extract_html_info(file_path: str, max_length: Union[int, None] = 200) -> str:
    """Extract relevant information from an HTML file.

    :param file_path: The path to the HTML file.
    :param max_length: The maximum length of the extracted text.
    :return: A formatted string containing the extracted HTML elements.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    buttons = soup.find_all('button')
    inputs = soup.find_all('input')
    links = soup.find_all('a')

    html_elements = "HTML Elements:\n"

    for button in buttons:
        button_text = clean_string(button.text)
        button_id = button.get("id", "No ID")
        button_class = ' '.join(button.get("class", []))  # Convert list to string with space separator
        button_type = button.get("type", "button")
        html_elements += f'Button: {button_text} - ID: {button_id} - Class: {button_class} - Type: {button_type}\n'

    for input_field in inputs:
        input_name = input_field.get("name", "No Name")
        input_type = input_field.get("type", "text")
        input_value = input_field.get("value", "")
        input_placeholder = clean_string(input_field.get("placeholder", ""))
        input_id = input_field.get("id", "No ID")
        input_class = ' '.join(input_field.get("class", []))  # Convert list to string with space separator
        input_label = input_field.get("aria-label", "")
        html_elements += f'Input: {input_name} - Type: {input_type} - Value: {input_value} - Placeholder: {input_placeholder} - ID: {input_id} - Class: {input_class} - Label: {input_label}\n'

    for link in links:
        link_text = clean_string(link.text)
        link_href = link.get("href", "#")
        link_id = link.get("id", "No ID")
        link_class = ' '.join(link.get("class", []))  # Convert list to string with space separator
        html_elements += f'Link: {link_text} - Href: {link_href} - ID: {link_id} - Class: {link_class}\n'

    html_elements.strip()

    if max_length:
        html_elements = truncate_text(html_elements, max_length=max_length)

    logger.debug(f"HTML elements extracted successfully. - Number of Elements: {len(html_elements.splitlines())}")

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
