import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Öffnen des Links "Messstellenliste"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.click('Benutzername *');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.click('Benutzername *');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
  await page.click('Arbeitsmappe Übersicht Messstellen');
  await page.click('.d-icon.d-icon-bold.status-icon');
});