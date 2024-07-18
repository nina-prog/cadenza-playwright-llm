import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the link "Anmelden"
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Fill in the username "Admin"
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();

  // Click on the button "Säulendiagramm"
  await page.getByRole('button', { name: 'Säulendiagramm' }).click();
});