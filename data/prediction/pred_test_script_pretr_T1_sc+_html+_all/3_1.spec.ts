import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Perform actions on the website
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#RDxYr2vFytOijWjelj7P1');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button