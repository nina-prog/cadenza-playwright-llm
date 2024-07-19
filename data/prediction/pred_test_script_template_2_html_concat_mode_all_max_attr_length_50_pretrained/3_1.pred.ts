import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add the following lines to perform the actions in the UI test description
  await page.click('Tutorial');
  await page.click('Arbeitsmappen Einstieg');
  await page.click('Drehen');
  await page.click('Karte');
  await page.click('Verzeichnis Tutorial');
  await page.click('Verzeichnis Gewässergüte');
  await page.click('Verzeichnis Automobile');
  await page.click('Verzeichnis Ergän