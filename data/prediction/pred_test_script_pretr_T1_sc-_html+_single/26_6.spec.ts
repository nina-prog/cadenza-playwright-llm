import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();
  await page.getByRole('link', { name: 'Tabelle Messstellenliste' }).click();
  await page.getByText('Messstelleninformationen').hover();
  await page.getByTestId('worksheet-view-of-type-table').getByLabel('Mehr …').click();
  await page.getByRole('menuitem', { name: 'Exportieren' }).click();
  await page.getByRole('menuitem', { name: 'Bericht (*.pdf) …' }).click();
});