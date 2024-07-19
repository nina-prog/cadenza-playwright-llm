import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByPlaceholder('Suchen nach …').click();
  await page.getByPlaceholder('Suchen nach …').fill('Messstellenkarte');
  await page.getByPlaceholder('Suchen nach …').press('Enter');
  await page.getByRole('link', { name: 'Karte Messstellenkarte' }).click();
  await page.getByRole('button', { name: 'Mehr' }).click();
});

// UI test description
test('Exportieren', async ({ page }) => {
  await page.click('#exportieren-button');
  await page.waitForSelector('#export-modal');
  await page.click('#export-modal-ok-button');
});