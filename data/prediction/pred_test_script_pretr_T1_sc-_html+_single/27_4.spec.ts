import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Exportieren - Bericht (*.pdf)...', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByPlaceholder('Suchen nach …').click();
  await page.getByPlaceholder('Suchen nach …').fill('Messstellenkarte');
  await page.getByPlaceholder('Suchen nach …').press('Enter');
  await page.getByRole('link', { name: 'Karte Messstellenkarte' }).click();
  await page.getByRole('button', { name: 'Mehr' }).click();
  await page.waitForSelector('#export-pdf-button');
  await page.click('#export-pdf-button');
  await page.waitForSelector('#export-pdf-modal');
  await page.click('#export-pdf-modal');
  await page.waitForSelector('#export-pdf-form');
  await page.click('#export-pdf-form');
  await page.waitForSelector('#pdf-export-input');
  await page.fill('#pdf-export-input', 'Bericht (*.pdf)...');
  await page.click('#pdf-export-button');
  await page.waitForSelector('#pdf-export-modal');
  await page.click('#pdf-export-modal');
  await page.waitForSelector('#pdf-export-overlay');
  await page.click('#pdf-export-overlay');
  await page.waitForSelector('#pdf-export-progress');
  await page.click('#pdf-export-progress');
  await