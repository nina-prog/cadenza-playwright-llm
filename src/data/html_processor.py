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

    html_elements = ""

    buttons_ls = []
    for button in buttons:
        args = {
            "text": clean_string(button.text),
            "id": button.get("id"),
            "class": ' '.join(button.get("class", [])),  # Convert list to string with space separator
            "name": button.get("name")
        }
        args_filtered = {key: value for key, value in args.items() if value}  # Remove empty values
        if args_filtered.get("text") or args_filtered.get("id"):
            buttons_ls.append(args_filtered)

    buttons_str = '\n'.join([str(button) for button in buttons_ls])  # <delete>
    html_elements += f"Buttons: \n{buttons_str}\n"  # f"Buttons: \n{buttons_ls}\n"

    inputs_ls = []
    for input_field in inputs:
        args = {
            "id": input_field.get("id"),
            "class": ' '.join(input_field.get("class", [])),  # Convert list to string with space separator
            "name": input_field.get("name"),
            "label": input_field.get("aria-label"),
            "type": input_field.get("type"),
            "placeholder": clean_string(input_field.get("placeholder")),
        }
        args_filtered = {key: value for key, value in args.items() if value}  # Remove empty values
        if args.get("name") or args.get("id") or args.get("label"):
            inputs_ls.append(args_filtered)

    inputs_str = '\n'.join([str(input_field) for input_field in inputs_ls])  # <delete>
    html_elements += f"Inputs: \n{inputs_str}\n"  # f"Inputs: \n{inputs_ls}\n"

    links_ls = []
    for link in links:
        args = {
            "text": clean_string(link.text),
            "id": link.get("id"),
            "class": ' '.join(link.get("class", [])),  # Convert list to string with space separator
            "href": link.get("href"),
        }
        args_filtered = {key: value for key, value in args.items() if value}  # Remove empty values
        if args_filtered.get("text") or args_filtered.get("id"):
            links_ls.append(args_filtered)

    links_str = '\n'.join([str(link) for link in links_ls])  # <delete>
    html_elements += f"Links: \n{links_str}\n"  # f"Links: \n{links_ls}\n"

    html_elements.strip()

    if max_length:
        html_elements = truncate_text(html_elements, max_length=max_length)

    logger.debug(
        f"HTML elements extracted successfully. - Number of Elements: {len(html_elements.splitlines())} - Number of Characters: {len(html_elements)}")

    return html_elements


def extract_html_info_short(file_path: str, max_length: Union[int, None] = 1000, max_item_length: int = 40) -> str:
    """Extract relevant information from an HTML file.

    :param file_path: The path to the HTML file.
    :param max_length: The maximum length of the extracted text.
    :param max_item_length: The maximum length of each item of the extracted information of the HTML file.
    :return: A formatted string containing the extracted HTML elements.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    buttons = soup.find_all('button')
    inputs = soup.find_all('input')
    links = soup.find_all('a')

    html_elements = ""

    buttons_ls = []
    for button in buttons:
        args = {
            "text": clean_string(button.text),
            "id": button.get("id"),
            "class": ' '.join(button.get("class", [])),  # Convert list to string with space separator
            "name": button.get("name")
        }
        args_filtered = {key: value for key, value in args.items() if value}  # Remove empty values
        args_filtered = {key: value for key, value in args_filtered.items() if len(value) < max_item_length}

        if args_filtered.get("text") or args_filtered.get("id"):
            buttons_ls.append(args_filtered)

    args_keys = ["text", "id", "class", "name"]
    button_text_key_list = []
    for key in args_keys:
        text_for_key = 'Button ' + key + 's:\n'
        if key == 'class':
            text_for_key = 'Link ' + key + 'es:\n'
        buttons_ls_with_key = list(filter(lambda x: key in x.keys(), buttons_ls))
        if buttons_ls_with_key:
            text_for_key += ', '.join([button[key] for button in buttons_ls_with_key])
            button_text_key_list.append(text_for_key)

    buttons_str = '\n'.join([str(button) for button in button_text_key_list])  # <delete>
    #html_elements += f"Buttons: \n{buttons_str}\n"  # f"Buttons: \n{buttons_ls}\n"
    html_elements += f"{buttons_str}\n"

    inputs_ls = []
    for input_field in inputs:
        args = {
            "id": input_field.get("id"),
            "class": ' '.join(input_field.get("class", [])),  # Convert list to string with space separator
            "name": input_field.get("name"),
            "label": input_field.get("aria-label"),
            "type": input_field.get("type"),
            "placeholder": clean_string(input_field.get("placeholder")),
        }
        args_filtered = {key: value for key, value in args.items() if value}  # Remove empty values
        args_filtered = {key: value for key, value in args_filtered.items() if len(value) < max_item_length}

        if args.get("name") or args.get("id") or args.get("label"):
            inputs_ls.append(args_filtered)

    args_keys = ["id", "class", "name", "label", "type", "placeholder"]
    inputs_text_key_list = []
    for key in args_keys:
        text_for_key = 'Input ' + key + 's:\n'
        if key == 'class':
            text_for_key = 'Link ' + key + 'es:\n'
        inputs_ls_with_key = list(filter(lambda x: key in x.keys(), inputs_ls))
        if inputs_ls_with_key:
            text_for_key += ', '.join([input[key] for input in inputs_ls_with_key])
            inputs_text_key_list.append(text_for_key)

    inputs_str = '\n'.join([str(input) for input in inputs_text_key_list])  # <delete>
    #html_elements += f"Inputs: \n{inputs_str}\n"  # f"Inputs: \n{inputs_ls}\n"
    html_elements += f"{inputs_str}\n"

    links_ls = []
    for link in links:
        args = {
            "text": clean_string(link.text),
            "id": link.get("id"),
            "class": ' '.join(link.get("class", [])),  # Convert list to string with space separator
        #    "href": link.get("href"),
        }
        args_filtered = {key: value for key, value in args.items() if value}  # Remove empty values
        args_filtered = {key: value for key, value in args_filtered.items() if len(value) < max_item_length}

        if args_filtered.get("text") or args_filtered.get("id"):
            links_ls.append(args_filtered)

    args_keys = ["text", "id", "class"]
    links_text_key_list = []
    for key in args_keys:
        text_for_key = 'Link ' + key + 's:\n'
        if key == 'class':
            text_for_key = 'Link ' + key + 'es:\n'
        links_ls_with_key = list(filter(lambda x: key in x.keys(), links_ls))
        if links_ls_with_key:
            text_for_key += ', '.join([link[key] for link in links_ls_with_key])
            links_text_key_list.append(text_for_key)

    links_str = '\n'.join([str(link) for link in links_text_key_list])  # <delete>
    #html_elements += f"Links: \n{links_str}\n"  # f"Links: \n{links_ls}\n"
    html_elements += f"{links_str}\n"

    html_elements.strip()

    if max_length:
        html_elements = truncate_text(html_elements, max_length=max_length)

    logger.debug(
        f"HTML elements extracted successfully. - Number of Elements: {len(html_elements.splitlines())} - Number of Characters: {len(html_elements)}")

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
