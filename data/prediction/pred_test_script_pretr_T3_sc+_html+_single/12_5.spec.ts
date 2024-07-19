import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('input[name="benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="benutzername"]', 'Admin');
  await page.click('Anmelden');
  await page.click('Mehr');
  await page.click('menuitem[title="Arbeitsmappe importieren"]');
  await page.click('button[title="Bitte wählen Sie eine Datei"]');
  await page.fill('input[name="files"]', 'Testmappe_Ladesaeulen.zip');
  await page.click('option[value="Repository Ladesaeulen"]');
});