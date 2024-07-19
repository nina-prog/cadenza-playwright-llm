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

  // Navigate to the desired section
  await page.click('#workbook-create');

  // Wait for the desired element to appear
  await page.waitForSelector('#RDxYr2vFytOijWjelj7P1');

  // Perform the desired action on the element
  await page.click('#RDxYr2vFytOijWjelj7P1');

  // Take a screenshot to verify the result
  await page.screenshot({ path: 'test-screenshot.png' });
});