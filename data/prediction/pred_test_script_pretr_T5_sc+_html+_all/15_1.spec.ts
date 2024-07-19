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
  for (const link of links) {
    await page.goto(link);
    await page.waitForSelector('[data-testid="startpage-section-navigation-item"]');
    await page.click('[data-testid="startpage-section-navigation-item"]');
  }

  // Add code to take a screenshot
  await page.screenshot({ path: 'cadenz_screenshot.png' });
});