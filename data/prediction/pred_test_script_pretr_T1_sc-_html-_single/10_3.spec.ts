import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke auf das Designersymbol in der Werkzeugleiste der Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Follow the steps in the UI test description
  await page.click('#designer-toolbar-icon');

  // Use the screenshot to understand the context of the test
  await page.screenshot({ path: 'ui-test-screenshot.png' });
});