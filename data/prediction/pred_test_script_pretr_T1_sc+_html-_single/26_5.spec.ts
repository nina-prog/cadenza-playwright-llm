import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Anmelden" button
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Enter "Admin" in the username field
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on "Gewässergüte" link
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();

  // Click on "Arbeitsmappe Übersicht Messstellen" link
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();
  await page.getByRole('link', { name: 'Tabelle Messstellenliste' }).click();

  // Hover over "Mehr ..." button
  await page.getByRole('menuitem', { name: 'Exportieren' }).click();

  // Take a screenshot of the export dialog
  await page.screenshot({ path: 'export.png' });
});