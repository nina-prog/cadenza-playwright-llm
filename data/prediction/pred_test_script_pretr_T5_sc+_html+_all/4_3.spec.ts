import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Skip to content');
  await page.click('Informationen zur Arbeitsmappe');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.fill('Passwort', 'Admin');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
  await page.click('Übersicht Messstellen');
});