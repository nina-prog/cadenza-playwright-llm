import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Anmelden" button
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Enter "Admin" in the username field
  await page.getByRole('textbox', { name: 'Benutzername *' }).click();
  await page.getByRole('textbox', { name: 'Benutzername *' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Benutzername *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Benutzername *' }).fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on "Tabelle (gruppiert)"
  await page.getByRole('button', { name: 'Tabelle (gruppiert)' }).click();

  // Wait for the chart to load
  await page.waitForSelector('#chart-container');

  // Take a screenshot of the chart
  await page.screenshot({ path: 'chart.png' });
});