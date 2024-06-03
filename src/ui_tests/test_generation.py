""" This script generates the UI tests using LLMs. """
import os
from playwright.sync_api import sync_playwright
from llm_integration import generate_test_cases

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change the level to 'DEBUG' to see more information


def generate_tests():
    """ Generates the UI tests using the LLMs. """
    test_cases = generate_test_cases()
    for idx, test_case in enumerate(test_cases):
        with open(f"src/ui_tests/test_cases/test_case_{idx + 1}.py", "w") as f:
            f.write(test_case)


if __name__ == "__main__":
    generate_tests()
