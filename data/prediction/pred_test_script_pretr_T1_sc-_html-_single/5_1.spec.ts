import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
});

// UI Test Description
test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/Gewässergüte/Übersicht Messstellen');
});