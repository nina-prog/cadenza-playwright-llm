import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Analysekontext Symbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByRole('button', { name: 'Schließen (⇧+ESC)' }).click();

  // Analysekontext Symbol in der Werkzeugleiste
  await page.click('#analysekontext-symbol');

  // Screenshot to understand the context of the test
  await page.screenshot({ path: 'analysekontext-symbol.png' });
});