import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Testmappe_Ladesaeulen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to perform actions based on the UI test description

  // Use the screenshot to understand the context of the test
});