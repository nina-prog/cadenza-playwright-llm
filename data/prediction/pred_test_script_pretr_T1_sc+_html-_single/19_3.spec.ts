import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Neue Sicht" in the toolbar
  await page.click('#toolbar-neue-sicht');

  // Wait for the new page to load
  await page.waitForLoadState();

  // Take a screenshot of the new page
  await page.screenshot({ path: 'new-page.png' });
});