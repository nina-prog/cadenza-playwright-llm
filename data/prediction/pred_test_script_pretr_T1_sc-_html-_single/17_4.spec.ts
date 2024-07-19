import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke unter Sicht für Daten" auf "Tabelle (gruppiert)",', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Find the "Tabelle (gruppiert)" element
  const tableElement = await page.$('#workbook-create-new-view-button');

  // Click on the "Tabelle (gruppiert)" element
  await tableElement.click();

  // Take a screenshot to verify the result
  await page.screenshot({ path: 'screenshot.png' });
});