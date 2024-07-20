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
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();

  // Mehr-Button
  const mehrButton = await page.locator('.d-icon.d-icon-bold.status-icon');
  await mehrButton.click();

  // Mehr-Button-Sicht
  const mehrButtonSicht = await page.locator('.d-icon.d-icon-bold.status-icon');
  await mehrButtonSicht.click();

  // Inputs
  const dateInput = await page.locator('#AN4ujnMQ1qNBLtVusJWHr', { visible: true });
  await dateInput.fill('01.01.2023');

  const intervalInput = await page.locator('.interval', { visible: true });
  await intervalInput.fill('10');

  const selectInput = await page.locator('.select2-search__field', { visible: true });
  await selectInput.fill('Test');

  // Links
  const homeLink = await page.locator('#home',