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
    return Array.from(links).map((link) => link.textContent);
  });

  // Add code to perform the UI test
  for (const link of links) {
    if (link === 'Zum Navigatorbaum springen' || link === 'Zum Hauptbereich springen') {
      continue;
    }
    await page.click(link);
    await page.waitForLoadState();
    await page.click('#skip-to-navigator');
    await page.waitForLoadState();
    await page.click('#skip-to-content');
    await page.waitForLoadState();
  }

  // Add code to save the test results
  writeFileSync('results.txt', 'Test results saved to file.');
});