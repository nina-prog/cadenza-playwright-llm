import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Diasy Cadenzza UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Arbeitsmappe exportieren" in the context menu
  await page.contextMenu.click('Arbeitsmappe exportieren');

  // Click on the "Mehr ... (A)" button
  await page.getByRole('button', { name: 'Mehr ... (A)' }).click();

  // Fill in the username "Admin"
  await page.getByRole('textbox', { name: 'Benutzername *' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Benutzername *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Benutzername *' }).fill('Admin');

  // Click on the "Anmelden" button
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Hover over the "Arbeitsmappe Testmappe_Ladesaeulen" link
  await page.getByRole('link', { name: 'Arbeitsmappe Testmappe_Ladesaeulen' }).hover();

  // Click on the "Mehr ... (A)" button
  await page.getByRole('button', { name: 'Mehr ... (A)' }).click();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});