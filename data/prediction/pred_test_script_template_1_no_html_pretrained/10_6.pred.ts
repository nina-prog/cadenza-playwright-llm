import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Designersymbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the designer symbol in the toolbar
  await page.click('#designersymbol');

  // Screenshot
  await page.screenshot({ path: 'designersymbol.png' });

  // Close the settings panel
  await page.click('#view-settings-panel');

  // Click on the designer symbol again
  await page.click('#designersymbol');
});