import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen', exact: true }).click();
});

// UI test description actions
test('Click on the three dots in the top right corner', async ({ page }) => {
  await page.click('#navigationTrigger');
});

// Additional test code
test('Verify that the map is displayed', async ({ page }) => {
  await page.waitForSelector('#map');
  expect(await page.evaluate(() => {
    return document.querySelector('#map').offsetWidth;
  })).toBeGreaterThan(0);
});