import sys
import os
import sqlite3
import asyncio
import re

from playwright.async_api import Playwright, async_playwright, expect


print(f"Current WD: {os.getcwd()}")

####################################
## Script to take images etc from
TEST_SCRIPT = "./test_script/playwright_testing.py"


SCREENSHOT = "./screenshots_expected_results/"
HTML = "./html_expected_results/"

# Create directory for screenshots if it doesn't exist
os.makedirs(SCREENSHOT, exist_ok=True)

# Create directory for HTML if it doesn't exist
os.makedirs(HTML, exist_ok=True)

# file to store screenshot and html
file_name = TEST_SCRIPT.split("/")[-1].split(".")[0] 
file_name_screenshot = TEST_SCRIPT.split("/")[-1].split(".")[0] + ".png"
file_name_html = TEST_SCRIPT.split("/")[-1].split(".")[0] + ".html"
path_screenshot = SCREENSHOT + file_name_screenshot
path_html = HTML + file_name_html
print(path_screenshot)


# specify code to take screenshot
screenshot_code = f"    await page.screenshot(path = \"{path_screenshot}\")\n"

# Construct the HTML extraction command with proper indentation
html_extraction_command = '    page_content = await page.content()\n'
html_extraction_command += '    with open("{}", "w") as file:\n'.format(path_html)
html_extraction_command += '        file.write(page_content)\n\n'

# Ensure the script exists
if not os.path.exists(TEST_SCRIPT):
    print(f"File not found: {TEST_SCRIPT}")
else:
    # Read and execute the Playwright script
    with open(TEST_SCRIPT, 'r') as file:
        script_content = file.readlines()

    # Find the position to insert the screenshot command
    insert_position = 0
    for i, line in enumerate(script_content):
        if "await page.close()" in line or "await context.close()" in line or "await browser.close()"in line:
            insert_position = i 
            break

    # Insert the screenshot command
    script_content.insert(insert_position, screenshot_code)
    script_content.insert(insert_position, html_extraction_command)
    # Join the script content back into a single string
    modified_script_content = ''.join(script_content)
    print(modified_script_content)
    exec(modified_script_content)