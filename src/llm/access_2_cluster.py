import time

from playwright.async_api import async_playwright
import os


class Access2Cluster:
    # static magic strings
    url_to_server = 'https://jupyter-test.scc.kit.edu/user/uksco/'
    url_to_main_folder = 'https://jupyter-test.scc.kit.edu/user/uksco/lab/tree/PSDA/Uebung3'
    path_to_input_file = 'input.txt'
    target_dir_of_output_file = ''
    name_of_jupyter_notebook = ''

    def __init__(self):
        self.playwright_context_manager = async_playwright()
        self.browser = None
        self.page = None

    async def login(self):
        playwright = await self.playwright_context_manager.start()
        self.browser = await playwright.chromium.launch(headless=False)
        self.page = await self.browser.new_page()
        await self.page.goto(self.url_to_server)
        await self.page.get_by_role("button", name="Sign in with your KIT Account").click()

    async def start_llm(self):
        await self.page.goto(self.url_to_main_folder)
        await (self.page.get_by_label("llm.ipynb")
               .get_by_title("Run this cell and advance (").get_by_role("button").click())
        await (self.page.get_by_label("llm.ipynb")
               .get_by_title("Run this cell and advance (").get_by_role("button").click())
        await (self.page.get_by_label("llm.ipynb")
               .get_by_title("Run this cell and advance (").get_by_role("button").click())
        await (self.page.get_by_label("llm.ipynb")
               .get_by_title("Run this cell and advance (").get_by_role("button").click())
        await (self.page.get_by_label("llm.ipynb")
               .get_by_title("Run this cell and advance (").get_by_role("button").click())

    async def run_inference(self, input):
        input_file = open("input.txt", "w")
        input_file.write(str(input))
        input_file.close()

        await self.page.get_by_text("# Here starts the inference").click()
        await (self.page.get_by_label("llm.ipynb")
               .get_by_title("Run this cell and advance (").get_by_role("button").click())

        # This code uploads the input file
        async with self.page.expect_file_chooser() as fc_info:
            await self.page.get_by_title("Upload Files").get_by_role("button").click()
        file_chooser = await fc_info.value
        await file_chooser.set_files(self.path_to_input_file)

        # This code downloads the output file
        # Wait, because the inference duration is over the timeout (30s)
        time.sleep(5)
        await self.page.get_by_text("output.txt", exact=True).click(button="right")
        async with self.page.expect_download() as download_info:
            await self.page.get_by_role("menu").get_by_text("Download", exact=True).click()
        download = await download_info.value
        await download.save_as(download.suggested_filename)

        # Delete output file
        await self.page.get_by_text("output.txt", exact=True).click(button="right")
        await self.page.get_by_role("menuitem", name="Delete Del").click()
        await self.page.get_by_role("button", name="Delete").click()

        output_file = open("output.txt", "r")
        output = output_file.read()
        output_file.close()
        os.remove("output.txt")
        os.remove("input.txt")
        return output

    async def shutdown(self):
        # TODO: Terminate program on cluster!

        await self.browser.close()
