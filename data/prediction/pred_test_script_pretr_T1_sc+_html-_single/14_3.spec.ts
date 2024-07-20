import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the "Anmelden" button
  await page.click('link', { name: 'Anmelden' });

  // Fill in the username
  await page.fill('input[name="benutzername"]', 'Admin');
  await page.press('Tab');

  // Fill in the password
  await page.fill('input[name="passwort"]', 'password');
  await page.press('Tab');

  // Click on the "Anmelden" button
  await page.click('button', { name: 'Anmelden' });

  // Click on the "Arbeitsmappe (*.zip)" link
  await page.click('link', { name: 'Arbeitsmappe (*.zip)' });

  // Click on the "Mehr" button
  await page.click('button', { name: 'Mehr' });

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});