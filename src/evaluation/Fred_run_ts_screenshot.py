import sys
import os
import asyncio
import re
import copy

import os
import copy

print(f"Current WD: {os.getcwd()}")

# Directories
TEST_DIR = './test_script/'  # Directory containing test scripts
SCREENSHOT_DIR = './screenshots_run_tests/'
# HTML_DIR = './html_run_tests/'

# Create directories for screenshots and HTML results if they don't exist
os.makedirs(SCREENSHOT_DIR, exist_ok=True)
# os.makedirs(HTML_DIR, exist_ok=True)
print("run")
# Iterate over all test scripts in the specified directory
for root, _, files in os.walk(TEST_DIR):
    for file in files:
        # if file != "10_3.spec.ts":
        #     #print(file)
        #     continue
        if file.endswith('.spec.ts'):
            test_script_path = os.path.join(root, file)
            file_name = os.path.splitext(file)[0]
            #print(file_name)
            screenshot_path = os.path.join(SCREENSHOT_DIR, file_name + ".png")
            # html_path = os.path.join(HTML_DIR, file_name + ".html")
            
            # Check if the screenshot already exists
            if os.path.exists(screenshot_path):
                print(f"Screenshot already exists for {file_name}. Skipping test.")
                continue

            # Specify code to take screenshot and extract HTML
            screenshot_code = f"  await page.screenshot({{ path: '{screenshot_path}' }});\n"
            time_out = 20000
            time_out_code = f"  test.setTimeout({time_out});\n"
            # html_extraction_command = (
            #     '  const page_content = await page.content();\n'
            #     '  const fs = require("fs");\n'
            #     f'  fs.writeFileSync("{html_path}", page_content);\n\n'
            # )

            # Ensure the script exists
            if not os.path.exists(test_script_path):
                print(f"File not found: {test_script_path}")
                continue

            # Read and modify the Playwright script
            with open(test_script_path, 'r') as file:
                script_content = file.readlines()
            #
            #print(script_content)
            original_script_content = copy.deepcopy(script_content)

            # Find the position to insert the screenshot command
            insert_position = 0
            for i, line in enumerate(script_content):
                if 'async' in line and 'test(' in line:
                    insert_position = i + 1
                    break

            # Insert the timeout code and screenshot command
            script_content.insert(insert_position, time_out_code)
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
            # script_content.insert(insert_position + 1, html_extraction_command)

            # Write the modified script back to the file
            with open(test_script_path, 'w') as file:
                file.writelines(script_content)
            #print(script_content)
            # Run the Playwright test
            os.system(f"npx playwright test {test_script_path}")

            # Restore the original script content
            with open(test_script_path, 'w') as file:
                file.writelines(original_script_content)

            print(f"Processed and restored script: {test_script_path}")

        