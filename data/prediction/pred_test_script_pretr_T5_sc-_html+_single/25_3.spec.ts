// Import the necessary modules
import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Define the precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Mehr …', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Arbeitsmappe importieren' }).click();
});

// Add code to select the ZIP file
await page.waitForSelector('input[type="file"]');
await page.click('input[type="file"]');
await page.waitForSelector('input[type="file"]');
await page.click('input[type="file"]');
await page.waitForSelector('input[type="file"]');
await page.click('input[type="file"]');

// Add code to click on the "Datei *" label and select the ZIP file
await page.waitForSelector('label[for="jjV4Hwbw44ZVvaJXpIpWD"]');
await page.click('label[for="jjV4Hwbw44ZVvaJXpIpWD"]');
await page.waitForSelector('input[type="file"]');
await page.click('input[type="file"]');

// Add code to click on the "Abbrechen" button
await page.waitForSelector('button[data-testid="cancel-button"]');
await page.click('button[data-testid="cancel-button"]');