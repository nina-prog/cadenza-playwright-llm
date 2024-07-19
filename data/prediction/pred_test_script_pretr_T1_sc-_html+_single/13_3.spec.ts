import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Exportieren Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByLabel('Arbeitsmappe Testmappe_Ladesaeulen').getByLabel('Mehr … (A)').click();
  await page.waitForSelector('#export-mappe-button');
  await page.click('#export-mappe-button');
});