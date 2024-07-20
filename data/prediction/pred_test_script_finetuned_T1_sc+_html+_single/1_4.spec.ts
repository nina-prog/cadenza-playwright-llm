import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
});
test('Duplizieren', async ({ page }) => {
  await page.getByTestId('worksheet-view-of-type-table').hover();
  await page.getByTestId('worksheet-view-of-type-table').getByLabel('Mehr ...').click();
  await page.getByTestId('worksheet-view-of-type-table').getByLabel('Duplizieren').click();
});