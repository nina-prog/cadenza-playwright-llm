import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="benutzername"]', 'Admin');
  await page.fill('input[name="passwort"]', 'password');
  await page.click('button[name="anmelden"]');
  await page.click('label[for="select2-search__field"]');
  await page.click('button[title="Zum Navigatorbaum springen"]');
  await page.click('button[title="Zum Hauptbereich springen"]');
  await page.click('button[title="Arbeitsmappe importieren"]');
  await page.click('input[type="file"]');
  await page.click('button[title="Bitte wählen Sie eine Datei"]');
  await page.click('label[for="select2-search__field"]');
  await page.click('button[title="Zum Navigatorbaum springen"]');
  await page.click('button[title="Zum Hauptbereich springen"]');
  await page.click('button[title="Arbeitsmappe importieren"]');
  await page.click('input[type="file"]');
  await page.click('button[title="Bitte wählen Sie eine Datei"]');
  await page.click('label[for="select2-search__field"]');
  await page.click('button[title="Zum Navigatorbaum springen"]');
  await page.click('button[title="Zum Hauptbereich springen"]');
  await page.click('button[title="Arbeitsmappe importieren"]');
  await page.click('input[type="file"]');
  await page.click('button[title="Bitte wählen Sie eine Datei"]');
  await page.click('label[for="select2-search__field"]');
  await page.click('button[title="Zum Navigatorbaum springen"]');
  await page.click('button[title="Zum Hauptbereich springen