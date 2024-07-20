import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Weiter...', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#further-options-link');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();
});