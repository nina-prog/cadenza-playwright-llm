import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the three dots
  await page.click('.btn-icon-three-dots');

  // Screenshot
  await page.screenshot({ path: 'ui-test-screenshot.png' });

  // Close the browser
  await page.close();
});