import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Weitere..."
  await page.click('#weiter');

  // Click on "Anmelden"
  await page.click('#anmelden');

  // Fill in the username
  await page.fill('input[name="benutzername"]', 'Admin');

  // Press Tab
  await page.press('Tab');

  // Fill in the password
  await page.fill('input[name="passwort"]', 'password');

  // Click on "Anmelden"
  await page.click('#anmelden');

  // Hover over "Arbeitsmappe Testmappe_Ladesaeulen"
  await page.hover('#testmappe_ladesaeulen');

  // Click on "Testmappe_Ladesaeulen"
  await page.click('#testmappe_ladesaeulen');

  // Click on "Workbench Create New View"
  await page.click('#workbench-create-new-view-button');
});