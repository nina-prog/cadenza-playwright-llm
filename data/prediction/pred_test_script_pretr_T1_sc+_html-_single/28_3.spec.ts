import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the three dots within the Diagram-Sicht "Anzahl der Messungen pro Jahr"
  await page.locator('.d-icon.d-icon-three-dots').click();

  // Wait for the screenshot to be taken
  await page.waitForScreenshot({ path: 'screenshot.png' });

  // Expect the screenshot to be taken
  expect(page.screenshot()).toMatchImage('screenshot.png');
});