import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke auf das Designersymbol in der Werkzeugleiste der Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Step 1: Anmelden
  await page.click('Anmelden');

  // Step 2: Benutzername
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Enter');

  // Step 3: Verzeichnis Gewässergüte
  await page.click('Verzeichnis Gewässergüte');

  // Step 4: Übersicht Messstellen
  await page.click('Übersicht Messstellen');

  // Step 5: Designersymbol in der Werkzeugleiste
  await page.click('Designer (ALT+⇧+2)');

  // Step 6: Schließen (⇧+ESC)
  await page.click('Schließen (⇧+ESC)');

  // Step 7: Designersymbol in der Werkzeugleiste
  await page.click('Designer (ALT+⇧+2)');

  // Step 8: Screenshot
  await page.screenshot({ path: 'screenshot.png' });
});