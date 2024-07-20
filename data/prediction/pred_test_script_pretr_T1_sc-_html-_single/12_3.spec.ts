import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Datei auswählen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.click('Benutzername *');
  await page.fill('Admin');
  await page.press('Tab');
  await page.click('Benutzername *');
  await page.fill('Admin');
  await page.press('Tab');
  await page.click('Anmelden');
  await page.click('Mehr …');
  await page.click('Arbeitsmappe importieren');

  // Wait for the file selection dialog to appear
  await page.waitForSelector('input[type="file"]');

  // Select the 'Testmappe_Ladesaeulen.zip' file
  await page.click('input[type="file"]');
  await page.fill('input[type="file"]', 'http://localhost/Testmappe_Ladesaeulen.zip');

  // Click the 'Laden' button
  await page.click('button[type="submit"]');

  // Wait for the page to load
  await page.waitForLoadState();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});