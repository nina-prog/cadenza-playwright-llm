import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the designer's icon in the toolbar
  await page.click('#designer-icon');

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });

  // Write the screenshot to a file
  writeFileSync('screenshot.png', '');
});