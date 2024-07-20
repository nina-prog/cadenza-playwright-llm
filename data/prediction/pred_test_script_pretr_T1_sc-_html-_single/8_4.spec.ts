import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke auf X im Datenmanager', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();
  await page.getByLabel('Datenmanager (ALT+⇧+3)').click();

  // Wait for the Datenmanager to be open
  await page.waitForSelector('.d-icon.d-icon-bold.status-icon');

  // Click on the X in the Datenmanager
  await page.getByRole('button', { name: 'X' }).click();

  // Verify that the Datenmanager is closed
  await page.waitForSelector('.d-icon.d-icon-bold.status-icon');

  // Take a screenshot to verify the test
  await page.screenshot({ path: 'datenmanager-x.png' });
});