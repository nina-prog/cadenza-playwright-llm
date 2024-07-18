import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the 3-dot button
  await page.locator('.d-icon.d-icon-bold.status-icon').click();

  // Click on the link "Tabelle Messstellenliste"
  await page.locator('link[name="Tabelle Messstellenliste"]').click();

  // Wait for the page to load
  await page.waitForLoadState();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});