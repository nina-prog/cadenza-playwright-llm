import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Set up the initial state
  await page.click('Anmelden');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername *', 'Admin');
  await page.click('Anmelden');
  await page.click('Mehr …');
  await page.click('Arbeitsmappe importieren');
  await page.click('Bitte wählen Sie eine Datei');
  await page.setInputFiles('Testmappe_Ladesaeulen.zip');

  // Perform actions on the website
  await page.click('Name der Arbeitsmappe');
  await page.fill('Name der Arbeitsmappe', 'Neue Arbeitsmappe');

  // Take a screenshot
  await page.screenshot({ path: 'UI-Test-Arbeitsmappe.png' });
});