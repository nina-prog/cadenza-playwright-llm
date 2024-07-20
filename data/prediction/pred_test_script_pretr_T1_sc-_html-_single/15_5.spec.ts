import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Duplizieren Arbeitsblatt', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.fill('Passwort', 'Admin');
  await page.click('Anmelden');
  await page.click('Arbeitsmappe Testmappe_Ladesaeulen');
  await page.click('Testmappe_Ladesaeulen');
  await page.click('Übersicht');
  await page.click('Arbeitsblatt duplizieren');
});