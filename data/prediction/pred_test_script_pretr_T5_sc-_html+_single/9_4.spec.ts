// Import the necessary modules
import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Define the precondition code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByLabel('Analysekontext (ALT+⇧+1)').click();
});

// Add code to the precondition based on the UI Test Description
await page.waitForSelector('#analysekontext');
await page.click('#analysekontext');