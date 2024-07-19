import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Importieren von Arbeitsmappen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Mehr …', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Arbeitsmappe importieren' }).click();

  // Wait for the file input to be visible
  await page.waitForSelector('#jjV4Hwbw44ZVvaJXpIpWD', { hidden: true });

  // Click on the "Bitte wählen Sie eine Datei aus." label
  await page.click('#jjV4Hwbw44ZVvaJXpIpWD .btn-link');

  // Wait for the file input to be visible
  await page.waitForSelector('#jjV4Hwbw44ZVvaJXpIpWD', { hidden: false });

  // Fill in the file input with the correct file
  await page.fill('#jjV4Hwbw44ZVvaJXpIpWD', 'path/to/file.zip');

  // Click on the "Importieren" button
  await page.click('#navigationTrigger');

  // Wait for the import to finish
  await page.waitForSelector('#W_iWO-jgXfJAboYHEAMwT', { hidden: true });

  // Verify that the import was successful
  await expect(page).toHaveSelector('#W_iWO-j