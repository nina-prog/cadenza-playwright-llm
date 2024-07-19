import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicken auf die drei Punkte rechts neben dem Namen der Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();

  // Wait for the menu to appear
  await page.waitForSelector('.dropdown-menu');

  // Click on the menu item
  await page.click('.dropdown-menu li:nth-child(1)');

  // Wait for the modal to appear
  await page.waitForSelector('#modal');

  // Click on the button in the modal
  await page.click('#modal button');

  // Wait for the result to appear
  await page.waitForSelector('#result');

  // Take a screenshot of the result
  await page.screenshot({ path: 'result.png' });
});