import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Analysekontext Symbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on Anmelden link
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Fill in Benutzername
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');

  // Click on Anmelden button
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on Gewässergüte link
  await page.getByRole('link', { name: 'Verzeichnis Gewässergüte' }).click();

  // Click on Übersicht Messstellen link
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();

  // Click on Analysekontext symbol
  await page.getByRole('button', { name: 'Analysekontext (ALT+⇧+1)' }).click();

  // Click on Schließen button
  await page.getByRole('button', { name: 'Schließen (⇧+ESC)' }).click();

  // Click on Analysekontext symbol again
  await page.getByRole('button', { name: 'Analysekontext (ALT+⇧+1)' }).click();

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});