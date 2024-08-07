import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('home');
  await page.click('Zum Hauptbereich springen');
  await page.click('Startseite');
  await page.click('Zum Navigatorbaum springen');
  await page.click('Anmelden');
  await page.fill('Benutzername *', 'Admin');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.fill(' ', 'Admin');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
  await page.click('Übersicht Messstellen');
  await page.click('Designer (ALT+⇧+2)');
  await page.click('Informationen zur Arbeitsmappe');
  await page.click('Speichern unter ...');
  await page.click('Speichern');
  await page.click('Speichern und veröffentlichen');
  await page.click('Zugriffseinstellungen');
  await page.click('Neue Sicht');
  await page.click('Mehr');
  await page.click('Daten laden');
  await page.click('Weitere Daten hinzufügen');
});