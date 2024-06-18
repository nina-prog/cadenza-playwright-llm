""" This module contains functions to process images and extract text from them. """
from PIL import Image
import pytesseract

from src.utils.helpers import truncate_text

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity


def extract_text_from_image(image_path: str, max_length: int = 200) -> str:
    """ Extract text from an image file.

    :param max_length: The maximum length of the text.
    :param image_path: The path to the image file.
    :return: The extracted text from the image.
    """
    image = Image.open(image_path)
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    # Extract text from the image
    text = pytesseract.image_to_string(image)
    # Truncate the text to the maximum length
    text = truncate_text(text, max_length=max_length)

    logger.debug(f"Text extracted from image successfully. - Characters: {len(text)})")

    return text
