from playwright.async_api import async_playwright
import urllib.request


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
        await self.page.get_by_text("File", exact=True).click()
        await self.page.get_by_text("New", exact=True).click()
        # TODO: Change to notebook!
        await self.page.locator("#jp-mainmenu-file-new").get_by_text("Terminal").click()
        # TODO: Start code on cluster!

    async def run_inference(self):
        # TODO: Run code in notebook

        # This code uploads the input file
        async with self.page.expect_file_chooser() as fc_info:
            await self.page.get_by_title("Upload Files").get_by_role("button").click()
        file_chooser = await fc_info.value
        await file_chooser.set_files(self.path_to_input_file)

        # This code downloads the output file
        await self.page.get_by_text("output.txt", exact=True).click(button="right")
        async with self.page.expect_download() as download_info:
            await self.page.get_by_role("menu").get_by_text("Download", exact=True).click()
        download = await download_info.value
        await download.save_as(download.suggested_filename)

    async def shutdown(self):
        # TODO: Terminate program on cluster!

        await self.browser.close()
