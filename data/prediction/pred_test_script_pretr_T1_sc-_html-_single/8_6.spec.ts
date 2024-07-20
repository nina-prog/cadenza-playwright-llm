import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Datenmanager Symbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.fill('Passwort', 'Admin');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
  const dashboardLink = await page.locator('.d-icon.d-icon-bold.status-icon');
  await dashboardLink.click();
  await page.click('Dashboard Häufigkeit der');
  await page.click('Datenmanager (ALT+⇧+3)');
  await page.click('data-browser-panel');
  await page.click('Schließen (⇧+ESC)');
  await page.click('Datenmanager (ALT+⇧+3)');
});