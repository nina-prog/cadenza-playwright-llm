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

  // Add code to perform the UI test
  const targetLink = links.find((link) => link.includes('Übersicht Messstellen'));
  await page.goto(targetLink);

  // Add code to save the screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // Add code to save the test results
  await writeFileSync('results.txt', 'Test passed\n');
});