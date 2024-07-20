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

// Add code to select the "Testmappe_Ladesaeulen" ZIP-file
await page.waitForSelector('input[type="file"]');
await page.click('input[type="file"]');
await page.waitForSelector('.d-file-input--input');
await page.click('.d-file-input--input');
await page.waitForSelector('.d-nav-tree-node_ROOT-Testmappe_Ladesaeulen_firstContent');
await page.click('.d-nav-tree-node_ROOT-Testmappe_Ladesaeulen_firstContent');