import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Exportieren Bericht', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername', 'Admin');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
  await page.click('Arbeitsmappe Übersicht Messstellen');
  await page.click('.d-icon.d-icon-bold.status-icon');
  await page.click('Tabelle Messstellenliste');
  await page.hover('Mehr …');
  await page.click('Exportieren');
  await page.click('Bericht (*.pdf) ...');
});