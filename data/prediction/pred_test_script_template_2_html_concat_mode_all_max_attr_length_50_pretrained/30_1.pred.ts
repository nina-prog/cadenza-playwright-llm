import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Follow the UI test description
  await page.click('#cadenz-btn-open-overview-messstationen');

  // Generate Playwright test code for the given webpage and actions
  await page.waitForSelector('#cadenz-btn-open-overview-messstationen');
  await page.click('#cadenz-btn-open-overview-messstationen');
});