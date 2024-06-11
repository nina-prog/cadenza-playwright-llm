# Import necessary libraries
import ast
import subprocess
import hashlib
import importlib.util
import json
import os
import re
import sqlite3
import textwrap
import time
import uuid
import asyncio
import zipfile
from bs4 import BeautifulSoup, Comment
from contextlib import contextmanager
from playwright.sync_api import sync_playwright
from playwright.async_api import async_playwright


# Website-related functions
def filter_html(html_content):
    # Parse HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Remove all HTML comments
    for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()

    # Remove <script> and <style> tags along with their content
    for tag in soup(['script', 'style']):
        tag.decompose()

    # Apply custom filter rules to remove tags with specific attributes
    for tag in soup.find_all():
        # Remove attributes that can contain dynamic content
        for attribute in ["nonce", "integrity", "data-.*", "id", "class"]:
            attributes_to_remove = [attr for attr in tag.attrs if re.match(attribute, attr)]
            for attr in attributes_to_remove:
                del tag[attr]

    # Remove text that could contain timestamps or random numbers
    for text in soup.find_all(text=True):
        if re.search(r'\b\d{10}\b', text) or re.search(r'\b\d{5,}\b', text):
            text.extract()

    # Return the filtered HTML content as a string
    return str(soup)


def hash_html(html_content):
    # Filter the HTML and compute MD5 hash of the result
    filtered_html = filter_html(html_content)
    return hashlib.md5(filtered_html.encode('utf-8')).hexdigest()

def generate_unique_filename(prefix, suffix, directory):
    # Generate a unique filename using a UUID
    unique_id = uuid.uuid4()
    return os.path.join(directory, f"{prefix}_{unique_id}.{suffix}")


    
async def capture_screenshot_html_and_url(page, prefix, screenshot_path, html_path):
    # Take a screenshot and save it to the provided path
    await page.screenshot(path=screenshot_path)
    print("----------------------------------------------------------")
    print(f"Successfully saved screenshot into {screenshot_path}")

    # Retrieve HTML content of the page and save it
    html_content = await page.content()
    with open(html_path, 'w', encoding='utf-8') as file:
        file.write(html_content)
    print("----------------------------------------------------------")
    print(f"Successfully saved html file into {html_path}")
    
    return screenshot_path, html_path, page.url

def get_html_content(file_path):
    # Read HTML content from a file
    with open(file_path, 'r',encoding='utf-8') as file:
        return file.read()

def start_codegen_with_storage(url, storage_path, output_script_path):
    # Normalize paths and start code generation with Playwright
    storage_path = os.path.normpath(storage_path)
    output_script_path = os.path.normpath(output_script_path)
    
    command = [
        "playwright", "codegen",
        '-o', output_script_path,
        "--load-storage", storage_path,
        "--target", "python-async",
        url
    ]
    with subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True) as process:
        try:
            input("Press Enter to stop codegen and close the browser...")
        finally:
            process.terminate()
            process.wait()
            stdout, stderr = process.communicate()
            if stdout:
                with open(output_script_path, "w") as file:
                    file.write(stdout)
                print("----------------------------------------------------------")
                print(f"Generated script saved to {output_script_path}")
            if stderr:
                print(f"Error: {stderr}")

# Database-related functions
def clear_table_website(table_name):
    conn = sqlite3.connect('../src/data_states.db')
    cursor = conn.cursor()
    cursor.execute(f"DELETE FROM {table_name}")
    conn.commit()
    conn.close()
    
def db_query_website(sql_query, params=None):
    conn = sqlite3.connect('../src/data_states.db')
    cursor = conn.cursor()
    if params:
        cursor.execute(sql_query, params)
    else:
        cursor.execute(sql_query)
    results = cursor.fetchall()
    conn.commit()
    conn.close()
    return results

def db_query_test(sql_query, params=None):
    conn = sqlite3.connect('playwright_codes.db')
    cursor = conn.cursor()
    if params:
        cursor.execute(sql_query, params)
    else:
        cursor.execute(sql_query)
    results = cursor.fetchall()
    conn.commit()
    conn.close()
    return results

def create_website_table_if_not_exists(table_name):
    conn = sqlite3.connect('../src/data_states.db')
    cursor = conn.cursor()
    create_table_sql = f"""
    CREATE TABLE IF NOT EXISTS {table_name} (
        id INTEGER PRIMARY KEY,
        hash TEXT NOT NULL,
        playwright_code TEXT NOT NULL,
        url TEXT NOT NULL,
        html TEXT NOT NULL,
        screenshot TEXT NOT NULL,
        context TEXT NOT NULL
    )
    """
    cursor.execute(create_table_sql)
    conn.commit()
    conn.close()

def create_test_table_if_not_exists(table_name):
    conn = sqlite3.connect('playwright_codes.db')
    cursor = conn.cursor()
    create_table_sql = f"""
    CREATE TABLE IF NOT EXISTS {table_name} (
        id INTEGER PRIMARY KEY,
        webpage_id INTEGER NOT NULL,
        steps TEXT NOT NULL,
        expectation TEXT NOT NULL,
        screenshot TEXT NOT NULL,
        html TEXT NOT NULL,
        playwright_code TEXT NOT NULL
    )
    """
    cursor.execute(create_table_sql)
    conn.commit()
    conn.close()

def db_insert_website(sql_query, params, table_name):
    conn = sqlite3.connect('../src/data_states.db')
    cursor = conn.cursor()
    try:
        cursor.execute(sql_query, params)
    except sqlite3.OperationalError:
        create_website_table_if_not_exists(table_name)
        cursor.execute(sql_query, params)
    conn.commit()
    conn.close()

def db_insert_test(sql_query, params, table_name):
    conn = sqlite3.connect('playwright_codes.db')
    cursor = conn.cursor()
    try:
        cursor.execute(sql_query, params)
    except sqlite3.OperationalError:
        create_test_table_if_not_exists(table_name)
        cursor.execute(sql_query, params)
    conn.commit()
    conn.close()

def db_delete_website(table_name, item_id):
    conn = sqlite3.connect('../src/data_states.db')
    cursor = conn.cursor()
    delete_query = f"DELETE FROM {table_name} WHERE id = ?"
    cursor.execute(delete_query, (item_id,))
    conn.commit()
    conn.close()
    
def db_delete_test(item_id):
    conn = sqlite3.connect('playwright_codes.db')
    cursor = conn.cursor()
    delete_query = f"DELETE FROM tests WHERE id = ?"
    cursor.execute(delete_query, (item_id,))
    conn.commit()
    conn.close()
    
def db_delete_table_website(table_name):
    conn = sqlite3.connect('../src/data_states.db')
    cursor = conn.cursor()
    try:
        cursor.execute(f"DROP TABLE IF EXISTS {table_name}")
    except sqlite3.OperationalError as e:
        print(f"Error occurred: {e}")
    conn.commit()
    conn.close()

def db_delete_table_test(table_name):
    conn = sqlite3.connect('playwright_codes.db')
    cursor = conn.cursor()
    try:
        cursor.execute(f"DROP TABLE IF EXISTS {table_name}")
    except sqlite3.OperationalError as e:
        print(f"Error occurred: {e}")
    conn.commit()
    conn.close()
    
def get_table_name_from_url(url):
    """
    alway use the same table name
    """
    return 'localhost_8080_cadenza'

    
def sanitize_table_name(table_name):
    # Replace any character that is not a letter, number, or underscore with an underscore
    return re.sub(r'\W', '_', table_name)

###############
# script operation
###############


def modify_script(filepath): # hard coding
    with open(filepath, "r", encoding="utf-8") as file:
        script_content = file.read()

    # add return and delete close
    # script_content = re.sub(
    #         r'(\s*)(# ---------------------)',
    #         r'\1return page, context, browser\n\1\2',
    #         script_content
    #     )
    if 'page1' in script_content:
        script_content = re.sub(
            r'(\s*)(# ---------------------)',
            r'\1return page1, context, browser\n\1\2',
            script_content
        )
    else:
        script_content = re.sub(
            r'(\s*)(# ---------------------)',
            r'\1return page, context, browser\n\1\2',
            script_content
        )

    script_content = re.sub(
        r'await page\.close\(\)', 
        '', 
        script_content
    )
    script_content = re.sub(
        r'await page1\.close\(\)', 
        '', 
        script_content
    )
    script_content = re.sub(
        r'await context\.close\(\)', 
        '', 
        script_content
    )
    script_content = re.sub(
        r'await browser\.close\(\)', 
        '', 
        script_content
    )
    # rename main to modified_main
    script_content = re.sub(
        r'async def main',
        'async def modified_main',
        script_content
    )

    # 
    # remove asyncio.run(main())
    script_content = re.sub(
        r'\s*asyncio\.run\(main\(\)\)\s*',
        '',
        script_content,
    )
    print("Removed asyncio.run(main())")
    
    with open("playwright_script.py", "w", encoding="utf-8") as file:
        file.write(script_content)

def import_modified_script():
    spec = importlib.util.spec_from_file_location("playwright_script", "playwright_script.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module
    
async def wrap_playwright_operations(operations, output_file):
    operations_code = '\n'.join([f'        {op}' for op in operations])
    
    """ add title and endding for operations，make it an executable code"""
    template = f"""
from playwright.async_api import async_playwright
import asyncio

async def combined_operations():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        

{operations_code}
        await page.close()
        await browser.close()



asyncio.run(combined_operations())
"""
    
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(template)
    print("----------------------------------------------------------")
    print(f"Successfully saved wrapped operations into {output_file}")



## test 1: add item to db
async def insert_init_website_to_db(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context()
    
        ## collect infomration
        # go to website and capture screenshot and html
        page = await context.new_page()
        await page.goto(url)
        await page.wait_for_load_state('networkidle')
        screenshot_path = generate_unique_filename('capture_', 'png', screenshot_dir)
        html_path = generate_unique_filename('capture_', 'html', html_dir)
        screenshot_path, html_path, _ = await capture_screenshot_html_and_url(page, 'capture', screenshot_path, html_path)
        html_content = get_html_content(html_path)
        html_hash = hash_html(html_content)
    
        # generate context
        context_path = generate_unique_filename('context_', 'json', context_dir)
        await context.storage_state(path = context_path)
        print("----------------------------------------------------------")
        print(f"Successfully saved browser context to {context_path}")
    
        # generate script and save to local
        output_file = generate_unique_filename('playwright_', 'py', state_script_dir)
        await wrap_playwright_operations([f'await page.goto("{url}")'], output_file)
        ## geenrate table name and check exist
        table_name = sanitize_table_name(get_table_name_from_url(url))
        max_id = db_query_website(f"SELECT MAX(id) FROM {table_name}")[0][0]
        new_item_id = 1 if max_id is None else max_id+ 1
        db_insert_website(f"INSERT INTO {table_name} (id, hash, playwright_code, url, screenshot, html, context) VALUES (?, ?, ?, ?, ?, ?, ?)", # to correct
                      (new_item_id, html_hash, output_file, url, screenshot_path, html_path, context_path), table_name)
    return table_name, new_item_id

## test 2: pw code in db
async def run_script_in_website_db(table_name, idn):
    """
    run the playwright code saved in the item and return:
    1. results
    2. screenshot_path
    3. html
    """
    async with async_playwright() as p:
        # load data from website db
        query = f"SELECT * FROM {table_name} WHERE id = ?"
        results = db_query_website(query, (idn,))
        item = results[0]
        
        # evaluate the generated code and capture screenshot, html and url:
        # moidfy script
        modify_script(item[2])
        # import 
        playwright_script = import_modified_script()
        # run
        page, context, browser = await playwright_script.run(p)
        await page.wait_for_load_state('networkidle')
        
        context_path = generate_unique_filename('context_', 'json', context_dir)
        await context.storage_state(path=context_path)
        print("----------------------------------------------------------")
        print(f"Successfully saved browser context to {context_path}")
        
        screenshot_path = generate_unique_filename('capture_', 'png', screenshot_dir)
        html_path = generate_unique_filename('capture_', 'html', html_dir)
        screenshot_path, html_path, url = await capture_screenshot_html_and_url(page, 'capture', screenshot_path, html_path)
        html_content = get_html_content(html_path)
        html_hash = hash_html(html_content)

    return results, screenshot_path, html_content

def delete_file_if_exist(file_path):
    file_path = str(file_path)
    try:
        if os.path.isfile(file_path):
            os.remove(file_path)
    except Exception as e:
        print(f"An erro occurred while trying to delete the file {file_path}: {e}")


        
screenshot_dir = './screenshot'
html_dir = './html'
context_dir = "./context"
test_script_dir = "./test_script"
state_script_dir = "./state_script"
url = "http://localhost:8080/cadenza/login"
#url = "http://localhost:8080/cadenza/workbooks/4yn3EfwE6YXaoBrRpJ70,hash=Dd0q_0IfSMJ1-kE2h4799dEtzrkYgT7jskuYDSRree-ecJp6NM2bjSa8Zcw=/worksheets/zqXGiZTSRVSkPyCUMC6ivw"
#url = "http://localhost:8080/cadenza/;jsessionid=21930242AA972B9BB59884C27A824514"

    
table_name = sanitize_table_name(get_table_name_from_url(url))
storage_state_path = "./storage_state.json"

async def main():
    global screenshot_dir, html_dir, test_script_dir, state_script_dir, table_name, url, storage_state_path

    # placeholder
    state_item_id = None
    new_state_item_id = None
    html_path = None 
    screenshot_path = None
    context_path = None 
    script_path = None

    train_item_id = None
    new_html_path = None
    new_screenshot_path = None
    new_context_path = None
    new_script_path = None
    async with async_playwright() as p:
        try:

            if 'http' in url:
                
                # query item with hashed html
                table_name = sanitize_table_name(get_table_name_from_url(url))
                create_website_table_if_not_exists(table_name)
                query = f"SELECT * FROM {table_name} WHERE url = ?" # query with url instead of hashed html
                results = db_query_website(query, (url,))
        
                # await browser.close()
        
                if len(results) == 0:
                    print(f"The url {url} is not exist in Website DB. Add it to the DB.")
                    table_name, state_item_id = await insert_init_website_to_db(url)
        
                    query = f"SELECT * FROM {table_name} WHERE id = ?"
                    results = db_query_website(query, (state_item_id,))
                    
                
            else:
                # it's tuple [table_name, id]: query items with id {hashed_html, storage_state, playwright_code}, run playwright code and capture screenshot&html
                # subprocess.run(["python", operation_script_path]), save url and context
                print("Input is not a url, please input an url instead.")
            
            ## take step and collect data 
            if results:
                # get item
                item = results[0]
                #print(f"Existing item found: {item}")
                script_path = item[2]
                url = item[3]
                html_path = item[4]
                screenshot_path = item[5]
                context_path = item[-1]
                #context_path = storage_state_path#item[-1]
                
                # manual execution and generate playwright code:
                print("Playwright codegen will open a browser. Perform your actions there.")
                new_script_path = generate_unique_filename('playwright_', 'py', test_script_dir)
                start_codegen_with_storage(url, context_path, new_script_path) # record and save script
    
                # input steps and expectation:
                print("----------------------------------------------------------")
                steps = input("Enter the description of the UI test steps: ")
    
                print("----------------------------------------------------------")
                expected_results = input("Enter the expected results: ")
                
                ## evaluate the generated code: modify the generated script, run it and return page, context and browser
                modify_script(new_script_path)
                playwright_script = import_modified_script()
                page, context, browser = await playwright_script.run(p)
                await page.wait_for_load_state('networkidle')
        
                # record new infor: context, new_url, new_screenshot, new_html
                new_context_path = generate_unique_filename('context_', 'json', context_dir)
                await context.storage_state(path=new_context_path)
                print("----------------------------------------------------------")
                print(f"Successfully saved browser context to {new_context_path}")
        
                new_screenshot_path = generate_unique_filename('capture_', 'png', screenshot_dir)
                new_html_path = generate_unique_filename('capture_', 'html', html_dir)
                new_screenshot_path, new_html_path, new_url = await capture_screenshot_html_and_url(page, 'capture', new_screenshot_path, new_html_path)
                new_html_content = get_html_content(new_html_path)
                new_html_hash = hash_html(new_html_content)
        
                # save new item to test db: get max id
                create_test_table_if_not_exists('tests')
                max_id = db_query_test(f"SELECT MAX(id) FROM tests")[0][0]
                train_item_id = 1 if max_id is None else max_id+ 1
                db_insert_test("INSERT INTO tests (id, webpage_id, steps, expectation, screenshot, html, playwright_code) VALUES (?, ?, ?, ?, ?, ?, ?)",
                          (train_item_id, item[0], steps, expected_results, new_screenshot_path, new_html_path, new_script_path), 'tests')
                
                # save new item to website db: get new table name, merge playwright code, save to db
                table_name = sanitize_table_name(get_table_name_from_url(url))
        
                output_state_script_path = generate_unique_filename('playwright_', 'py', state_script_dir)
                #merge_playwright_operations(item['playwright_code'], new_script_path, output_state_script_path) # merge the two file and save to new address
                output_state_script_path = new_script_path
        
                max_id = db_query_website(f"SELECT MAX(id) FROM {table_name}")[0][0]
                new_state_item_id = 1 if max_id is None else max_id+ 1
                db_insert_website(f"INSERT INTO {table_name} (id, hash, playwright_code, url, screenshot, html, context) VALUES (?, ?, ?, ?, ?, ?, ?)", # to correct
                          (new_state_item_id, new_html_hash, output_state_script_path, new_url, new_screenshot_path, html_path, new_context_path), table_name)
        
                print(f"Test successfully created with ID: {train_item_id}")
    
                await page.close()
                await browser.close()
        
            else:
                print("No matching item found in the database. Please try another table name and ID tuple.")

        except Exception as e:
            print(f"Error Occurded: {e}")
            print(f"===== roll back =====")
            # db rollback
            db_delete_website(table_name, state_item_id)
            db_delete_website(table_name, new_state_item_id)
            #db_delete_test(train_item_id)

            # file rollback
            delete_file_if_exist(html_path)
            delete_file_if_exist(screenshot_path)
            delete_file_if_exist(context_path)
            delete_file_if_exist(script_path)
            
            delete_file_if_exist(new_html_path)
            delete_file_if_exist(new_screenshot_path)
            delete_file_if_exist(new_context_path)
            delete_file_if_exist(new_script_path)
            
            
                    
asyncio.run(main())
