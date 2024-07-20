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
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByLabel('Designer (ALT+⇧+2)').click();
});

// Add code to the precondition based on the UI Test Description
await page.getByXPath('//a[contains(text(), "Karte")]').click();

// Add code to the precondition based on the Playwright Test Precondition
await page.keyboard.down('Control');
await page.keyboard.down('Shift');
await page.keyboard.down('ArrowDown');
await page.keyboard.up('Control');
await page.keyboard.up('Shift');
await page.keyboard.up('ArrowDown');