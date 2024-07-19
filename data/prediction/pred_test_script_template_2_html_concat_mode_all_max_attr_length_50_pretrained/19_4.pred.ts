import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();
});

// UI test description
test('Klicke auf "Weitere...",', async ({ page }) => {
  await page.click('#weiter');
});

// Generated Playwright test code
test('Klicke auf "Weitere...",', async ({ page }) => {
  await page.click('#weiter');
});