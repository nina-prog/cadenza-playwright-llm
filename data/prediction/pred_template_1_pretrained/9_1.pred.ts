import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Additional actions based on UI test description
  // ...

  // Take a screenshot of the page
  await page.screenshot({ path: 'cadenz_test.png' });

  // Write the screenshot to a file
  writeFileSync('cadenz_test.png', '');
});