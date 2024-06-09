import time
from playwright.sync_api import expect, sync_playwright


def test_load_cadenza_website_and_find_Willkommen_bei_disy_Cadenza_text_and_make_screenshot():
    with sync_playwright() as p:
        browser = p.webkit.launch(headless=False)
        page = browser.new_page()
        page.goto("http://localhost:8080/cadenza/")
        # Wait 3 seconds to create a screenshot from the fully loaded website.
        time.sleep(3)
        page.screenshot(path="temp_images/example.png")

        # Expect the website "to contain" a substring.
        expect(page.get_by_text("Willkommen bei disy Cadenza")).to_be_visible()
        browser.close()
