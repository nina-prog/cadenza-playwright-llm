import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Datenbank-Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Finden Sie den Link "Anmelden" und klicken Sie darauf
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Finden Sie den Textfeld "Benutzername" und fügen Sie "Admin" ein
  await page.getByRole('textbox', { name: 'Benutzername *' }).fill('Admin');

  // Drücken Sie die Tasten "Tab" und "Enter"
  await page.getByRole('textbox', { name: 'Benutzername *' }).press('Tab');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Finden Sie den Text "Verzeichnis Gewässergüte" und klicken Sie darauf
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();

  // Finden Sie den Status-Icons und klicken Sie darauf
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();

  // Finden Sie den Link "Tabelle Messstellenliste" und klicken Sie darauf
  await page.getByRole('link', { name: 'Tabelle Messstellenliste' }).click();

  // Hoveren Sie über der Tabelle und klicken Sie auf "Mehr ..."
  await page.getByTestId('worksheet-view-of-type-table').hover();
  await page.getByTestId('worksheet-view-of-type-table').getByLabel('Mehr ...').click();
});