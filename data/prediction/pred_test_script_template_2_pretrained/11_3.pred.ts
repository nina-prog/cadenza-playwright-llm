import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByTestId('create-workbook-button').click();
  await page.getByRole('menuitem', { name: 'Gewässer' }).click();
});

// UI test description
test('Create a new worksheet', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#create-workbook-button');
  await page.click('#Arbeitsblatt_1');
});