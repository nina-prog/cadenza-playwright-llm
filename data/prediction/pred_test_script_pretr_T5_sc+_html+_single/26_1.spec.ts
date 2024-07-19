import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to retrieve the links from the website
  const links = await page.evaluate(() => {
    const links = document.querySelectorAll('a');
    return Array.from(links).map((link) => link.href);
  });

  // Add code to set up the initial state
  await page.waitForSelector('startpage-section-navigation-item');

  // Add code to perform the UI test
  const selectedLink = await page.select('startpage-section-navigation-item');
  await page.click(selectedLink);

  // Add code to take a screenshot
  await page.screenshot({ path: 'cadenz_screenshot.png' });

  // Add code to save the screenshot
  writeFileSync('cadenz_screenshot.png', 'image/png');
});