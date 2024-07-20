import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the Analysekontextsymbol in the toolbar
  await page.click('#analysekontextsymbol');

  // Screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // Close the browser
  await page.close();
});