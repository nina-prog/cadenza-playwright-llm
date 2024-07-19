import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Mehr …', { exact: true }).click();
});

// UI test description actions
test('Import Arbeitsmappe', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#cn5zuaReL7NzmGx0bzyN4');
  await page.click('Arbeitsmappe importieren');
});

// Playwright test code
test('Import Arbeitsmappe', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#cn5zuaReL7NzmGx0bzyN4');
  await page.click('Arbeitsmappe importieren');
});