import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Neues Arbeitsblatt"
  await page.click('[aria-label="Neues Arbeitsblatt"]');

  // Click on "Gewässer" menu item
  await page.click('[aria-label="Gewässer"]');

  // Click on "Anmelden" button
  await page.click('[name="Anmelden"]');

  // Fill in username
  await page.fill('[name="Benutzername"]', 'Admin');

  // Press tab key
  await page.press('Tab');

  // Fill in password
  await page.fill('[name="Passwort"]', 'password');

  // Click on "Anmelden" button
  await page.click('[name="Anmelden"]');

  // Click on "create workbook button"
  await page.click('[data-testid="create-workbook-button"]');

  // Wait for the workbook to be created
  await page.waitForSelector('[data-testid="workbook-created-message"]');

  // Take screenshot
  await page.screenshot({ path: 'screenshot.png' });
});