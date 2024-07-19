import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the link "Anmelden"
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Fill in the username "Admin"
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');

  // Click on the button "Anmelden"
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the link "Übersicht Messstellen"
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});