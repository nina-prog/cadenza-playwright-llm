import asyncio
#import re
from playwright.async_api import Playwright, async_playwright, expect


async def run(playwright: Playwright) -> None:
    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context(storage_state="context\\context__a820ac84-8e4e-44ba-ab59-942bae058db8.json")
    page = await context.new_page()
    await page.goto("http://localhost:8080/cadenza/")
    await page.get_by_role("link", {name: "Anmelden"}).click()    
    await page.get_by_label("Benutzername *").click()
    await page.get_by_label("Benutzername *").fill("Admin")
    await page.get_by_label("Benutzername *").press("Tab")
    await page.get_by_placeholder(" ").fill("Admin")
    await page.get_by_placeholder(" ").press("Enter")
    await page.get_by_test_id('create-workbook-button').click()


async def main() -> None:
    async with async_playwright() as playwright:
        await run(playwright)


asyncio.run(main())
