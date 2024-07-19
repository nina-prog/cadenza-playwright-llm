import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the "Gewässergüte" link
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();

  // Click on the "Arbeitsmappe Übersicht Messstellen" link
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();

  // Click on the "Tabelle Messstellenliste" link
  await page.getByRole('link', { name: 'Tabelle Messstellenliste' }).click();

  // Hover over the "Mehr ..." button
  await page.getByRole('menuitem', { name: 'Mehr ...' }).click();

  // Click on the "Exportieren" menu item
  await page.getByRole('menuitem', { name: 'Exportieren' }).click();

  // Click on the "Bericht (*.pdf)" menu item
  await page.getByRole('menuitem', { name: 'Bericht (*.pdf)' }).click();

  // Take a screenshot of the export dialog
  await page.screenshot({ path: 'export-dialog.png' });
});