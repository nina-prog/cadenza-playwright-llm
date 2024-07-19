import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen', exact: true }).click();
});

// Add code to the precondition based on the UI Test Description
// ...

// Add not more than 3 lines of code
// ...

// Use the screenshot to understand the context of the test
// ...