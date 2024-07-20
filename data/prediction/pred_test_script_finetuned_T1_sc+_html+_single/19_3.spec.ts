import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByTestId('k4kdt57JE_AR63P7ZioGN').click();
  await page.getByTestId('skip-to-navigator').click();
  await page.getByTestId('skip-to-content').click();
  await page.getByTestId('home').click();
  await page.getByTestId('d-condition-date-picker--input').click();
  await page.getByTestId('select2-search__field').click();
  await page.getByTestId('userSpecificLink').click();
  await page.getByTestId('ellipsis').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.getByTestId('hidden-xs').click();
  await page.