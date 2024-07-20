import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  const page1 = await page1Promise;
  await page.getByTestId('button-icon-borderless-add-view-button').click();
  await page.getByTestId('button-icon-borderless-cancel-button').click();
  await page.getByTestId('button-icon-borderless-refresh-button').click();
});