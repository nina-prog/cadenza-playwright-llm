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
  await page.waitForSelector('[data-testid="startpage-section-navigation-item"]');

  // Add code to perform the UI test
  const item = await page.querySelector('[data-testid="startpage-section-navigation-item"]');
  const link = links.find((link) => link === item.getAttribute('href'));
  await item.click();

  // Add code to take a screenshot
  await page.screenshot({ path: 'cadenza-screenshot.png' });

  // Add code to save the screenshot
  writeFileSync('cadenza-screenshot.png', 'Cadenza UI Test Screenshot');
});