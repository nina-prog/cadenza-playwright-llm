import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Vergeben eines neuen Namens in "Name der Arbeitsmappe"', async ({ page }) => {
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
  await page.click('Bitte wählen Sie eine Datei');
  await page.setInputFiles('Testmappe_Ladesaeulen.zip');

  // Vergeben eines neuen Namens in "Name der Arbeitsmappe"
  await page.click('Name der Arbeitsmappe');
  await page.fill('Neuer Name *');
  await page.press('Enter');
});