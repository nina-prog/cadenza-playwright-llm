import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Select "Datei *" and choose the ZIP file
  await page.click('#datei-input');
  await page.fill('#datei-input', 'test.zip');

  // Click "Anmelden" button
  await page.click('button[name="Anmelden"]');

  // Click "Mehr ..." and select "Arbeitsmappe importieren"
  await page.click('.menuitem[name="Mehr ..."]');
  await page.click('menuitem[name="Arbeitsmappe importieren"]');

  // Wait for the import to complete
  await page.waitForSelector('#import-status');

  // Expect the import to be successful
  expect(await page.textContent('#import-status')).toBe('Erfolgreich importiert');
});