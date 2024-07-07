import sys
import os
import asyncio
import re

print(f"Current WD: {os.getcwd()}")

####################################
## Script to take images etc from
TEST_SCRIPT = "./test_script/000_test.spec.ts"

SCREENSHOT = "./screenshots_expected_results/"
HTML = "./html_expected_results/"

# Create directory for screenshots if it doesn't exist
os.makedirs(SCREENSHOT, exist_ok=True)

# Create directory for HTML if it doesn't exist
os.makedirs(HTML, exist_ok=True)

# File to store screenshot and html
file_name = TEST_SCRIPT.split("/")[-1].split(".")[0] 
file_name_screenshot = TEST_SCRIPT.split("/")[-1].split(".")[0] + ".png"
file_name_html = TEST_SCRIPT.split("/")[-1].split(".")[0] + ".html"
path_screenshot = SCREENSHOT + file_name_screenshot
path_html = HTML + file_name_html
print(path_screenshot)

# Specify code to take screenshot
screenshot_code = f"  await page.screenshot({{ path: \"{path_screenshot}\" }});\n"

# Construct the HTML extraction command with proper indentation
html_extraction_command = '  const page_content = await page.content();\n'
html_extraction_command += '  const fs = require("fs");\n'
html_extraction_command += '  fs.writeFileSync("{}", page_content);\n\n'.format(path_html)

# Ensure the script exists
if not os.path.exists(TEST_SCRIPT):
    print(f"File not found: {TEST_SCRIPT}")
else:
    # Read and modify the Playwright script
    with open(TEST_SCRIPT, 'r') as file:
        script_content = file.readlines()

    # Find the position to insert the screenshot command
    insert_position = 0
    found_position = 0
    last_await_position = 0
    for i, line in enumerate(script_content):
        if "await page.close()" in line or "await context.close()" in line or "await browser.close()" in line:
            found_position = 1
            insert_position = i 
            break
        if "await" in line:
            last_await_position = i + 1  # position after the last "await" line

    if found_position == 0:
        insert_position = last_await_position

    # Insert the screenshot and HTML extraction commands
    script_content.insert(insert_position, screenshot_code)
    script_content.insert(insert_position + 1, html_extraction_command)

    # Write the modified script back to the file
    with open(TEST_SCRIPT, 'w') as file:
        file.writelines(script_content)
    print(TEST_SCRIPT)
    os.system(f"npx playwright test {TEST_SCRIPT}")
