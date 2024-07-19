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
  const navigationItems = await page.evaluate(() => {
    const navigationItems = document.querySelectorAll('[data-testid="startpage-section-navigation-item"]');
    return Array.from(navigationItems).map((item) => item.textContent);
  });

  // Add code to take a screenshot
  await page.screenshot({ path: 'cadenz_screenshot.png' });

  // Add code to save the screenshot
  writeFileSync('cadenz_screenshot.png', '');
});