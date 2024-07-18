import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Informationen zur Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Informationen zur Arbeitsmappe" in the Navigatorleiste
  await page.click('[aria-label="Informationen zur Arbeitsmappe"]');

  // Click on "Anmelden" button
  await page.click('[name="Anmelden"]');

  // Fill in the username
  await page.fill('input[name="Benutzername"]', 'Admin');

  // Press Tab key
  await page.press('Tab');

  // Fill in the password
  await page.fill('input[name="Passwort"]', 'password');

  // Click on "Anmelden" button
  await page.click('[name="Anmelden"]');

  // Click on "Verzeichnis Gewässergüte" link
  await page.click('[title="Verzeichnis Gewässergüte"]');

  // Click on "Übersicht Messstellen" link
  await page.click('[title="Übersicht Messstellen"]');

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});