import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Diasy Cadenzza UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the "Anmelden" button
  await page.click('link', { name: 'Anmelden' });

  // Fill in the username
  await page.fill('input[name="benutzername"]', 'Admin');

  // Press the tab key
  await page.press('Tab');

  // Fill in the password
  await page.fill('input[name="passwort"]', 'password');

  // Click on the "Anmelden" button
  await page.click('button', { name: 'Anmelden' });

  // Click on the "Create Workbook" button
  await page.click('button', { name: 'create-workbook-button' });
});