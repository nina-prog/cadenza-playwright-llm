""" Summarize text using the T5 model. """
from transformers import pipeline

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change to 'INFO' for less verbosity

# Load summarization pipeline
summarizer = pipeline("summarization", model="t5-small", tokenizer="t5-small")


def summarize_text(text: str, max_length: int = 100) -> str:
    """ Summarize the input text using the T5 model.

    :param text: The input text to summarize.
    :param max_length: The maximum length of the summary.
    :return: The summarized text.
    """
    # Generate a summary of the input text
    summary = summarizer(text, max_length=max_length, min_length=30, do_sample=False)
    logger.debug(f"Text summarized successfully from {len(text)} characters to {len(summary[0]['summary_text'])} characters.")
    return summary[0]['summary_text']
