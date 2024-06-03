""" Script to run all the generated UI test cases. """
from playwright.sync_api import sync_playwright
import os

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change the level to 'DEBUG' to see more information


def run_test_case(test_case_file: str):
    """ Run a single UI test case.

    :param test_case_file: Path to the test case file
    :type test_case_file: str
    """
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        exec(open(test_case_file).read())
        browser.close()


def run_all_tests():
    """ Run all the generated UI test cases. """
    test_cases_dir = "src/ui_tests/test_cases"
    for test_case_file in os.listdir(test_cases_dir):
        run_test_case(os.path.join(test_cases_dir, test_case_file))


if __name__ == "__main__":
    run_all_tests()
