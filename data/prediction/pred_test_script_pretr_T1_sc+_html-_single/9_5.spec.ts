import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Analysekontext Symbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the Analysekontext symbol
  await page.getByRole('button', { name: 'Analysekontext (ALT+⇧+1)' }).click();

  // Close the window
  await page.getByRole('button', { name: 'Schließen (⇧+ESC)' }).click();

  // Take a screenshot
  await page.screenshot({ path: 'analysekontext.png' });
});