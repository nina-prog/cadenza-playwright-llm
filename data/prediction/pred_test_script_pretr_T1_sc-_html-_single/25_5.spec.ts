import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.fill('Benutzername', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername', 'Admin');
  await page.click('Anmelden');
  await page.click('Mehr …');
  await page.click('Arbeitsmappe importieren');
  await page.click('Bitte wählen Sie eine Datei');
  await page.setInputFiles('Testmappe_Ladesaeulen.zip');
  await page.fill('Bitte geben Sie einen Namen', 'TestRename');
});