import sys
import os
import asyncio
import re
import copy

import os
import copy
import subprocess

print(f"Current WD: {os.getcwd()}")

# Directories
TEST_DIR = './test_script/'  # Directory containing test scripts
SCREENSHOT_DIR = './screenshots_run_tests/'
# HTML_DIR = './html_run_tests/'

# Create directories for screenshots and HTML results if they don't exist
os.makedirs(SCREENSHOT_DIR, exist_ok=True)
# os.makedirs(HTML_DIR, exist_ok=True)

for root, _, files in os.walk(TEST_DIR):
    for file in files:
        # if file != "10_3.spec.ts":
        #     #print(file)
        #     continue
        #print(file)
        file_name = os.path.splitext(file)[0]
        print(file_name)
        screenshot_path = os.path.join(SCREENSHOT_DIR, file_name + ".png")
            
        test_script_path = os.path.join(root, file)
        file_name = os.path.splitext(file)[0]
        print(file_name)
        screenshot_path = os.path.join(SCREENSHOT_DIR, file_name + ".png")
        

        with open(test_script_path, 'r') as file:
                generated_code = file.readlines()
        break
    break
print(f"start running generated code")


def calculate_success_rate(generated_code: str, file_name, screen_shot_dir):
    
    # Create directories for screenshots
    os.makedirs(screen_shot_dir, exist_ok=True)
    if not os.path.exists(screen_shot_dir):
        print(f"Failed to create the file {screen_shot_dir}.")
        return
    
    screenshot_path = os.path.join(screen_shot_dir, file_name + ".png")
    ## Code to add in script: Specify code to take screenshot 
    screenshot_code = f"  await page.screenshot({{ path: '{screenshot_path}' }});\n"
    time_out = 30000
    time_out_code = f"  test.setTimeout({time_out});\n"

    # Find the position to insert the screenshot command
    assert type(generated_code) == type([])
    insert_position = 0
    for i, line in enumerate(generated_code):
        if 'async' in line and 'test(' in line:
            insert_position = i + 1
            break
    
    # Insert the timeout code and screenshot command
    generated_code.insert(insert_position, time_out_code)
    found_position = 0
    last_await_position = 0
    for i, line in enumerate(generated_code):
        if "await page.close()" in line or "await context.close()" in line or "await browser.close()" in line:
            found_position = 1
            insert_position = i 
            break
        if "await" in line:
            last_await_position = i + 1  # position after the last "await" line

    if found_position == 0:
        insert_position = last_await_position

    # Insert the screenshot and HTML extraction commands
    generated_code.insert(insert_position, screenshot_code)

    temp_path = "./test_script/temp.spec.ts"
    with open(temp_path, 'w') as file:
        file.writelines(generated_code)

    if os.path.exists(temp_path):
        print(f"File {temp_path} created successfully.")
    else:
        print(f"Failed to create the file {temp_path}.")
        return
    
    # Run the Playwright test
    result = os.system(f"npx playwright test {temp_path}")
    if result == 0:
        return 1
    else:
        return 0



res = calculate_success_rate(generated_code, file_name, SCREENSHOT_DIR)
print(res)