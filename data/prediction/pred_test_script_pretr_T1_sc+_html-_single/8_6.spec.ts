import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the link "Anmelden"
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Fill the username field with "Admin"
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the link "Verzeichnis Gewässergüte"
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();

  // Click on the icon "status-icon"
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();

  // Click on the link "Dashboard Häufigkeit der"
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();

  // Click on the button "Datenmanager (ALT+⇧+3)"
  await page.getByLabel('Datenmanager (ALT+⇧+3)').click();

  // Click on the button "Schließen (⇧+ESC)"
  await page.getByTestId('data-browser-panel').getByLabel('Schließen (⇧+ESC)').click();

  // Click on the button "Datenmanager (ALT+⇧+3)" again
  await page.getByLabel('Datenmanager (ALT+⇧+3)').click();
});