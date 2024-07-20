import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Exportieren - Bericht (*.pdf)', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.fill('Passwort', 'Admin');
  await page.click('Anmelden');
  await page.click('Suchen nach …');
  await page.fill('Suche nach:', 'Messstellenkarte');
  await page.click('Suchen nach …');
  await page.click('Karte Messstellenkarte');
  await page.click('Mehr');
});