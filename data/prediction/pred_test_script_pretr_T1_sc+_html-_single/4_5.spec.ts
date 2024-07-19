import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the link to the water quality page
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();

  // Click on the button to open a new worksheet
  await page.getByRole('menuitem', { name: 'Neues Arbeitsblatt' }).click();
});