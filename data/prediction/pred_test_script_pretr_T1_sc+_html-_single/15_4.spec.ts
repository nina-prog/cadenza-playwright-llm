import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsblatt duplicieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the "Arbeitsblatt duplicieren" button
  await page.getByText('Arbeitsblatt duplicieren').hover();
  await page.getByRole('link', { name: 'Arbeitsblatt duplicieren' }).click();

  // Wait for the map to load
  await page.waitForSelector('#map');

  // Take a screenshot of the map
  await page.screenshot({ path: 'map.png' });

  // Close the browser
  await page.close();
});