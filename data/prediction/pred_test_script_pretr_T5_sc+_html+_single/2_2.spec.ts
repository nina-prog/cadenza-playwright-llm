import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByTestId('create-workbook-button').click();
});

// UI Test Description
test('Repository selection', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#Automobile');
});

// Screenshot