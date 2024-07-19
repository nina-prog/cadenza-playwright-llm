import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Gewässer', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByTestId('create-workbook-button').click();
  await page.getByRole('menuitem', { name: 'Gewässer' }).click();
  await page.getByRole('button', { name: 'Arbeitsblatt' }).click();
  await page.getByRole('menuitem', { name: 'Neues Arbeitsblatt' }).click();
  await page.getByLabel('Name *').fill('Blatt');
  await page.getByRole('button', { name: 'Hinzufügen' }).click();
});