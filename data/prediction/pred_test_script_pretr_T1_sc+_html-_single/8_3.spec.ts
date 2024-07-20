import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the data manager icon in the tool bar
  await page.click('#data-manager-icon');

  // Click on the link "Anmelden"
  await page.click('link', { name: 'Anmelden' });

  // Fill in the username field with "Admin"
  await page.fill('input[name="username"]', 'Admin');

  // Press the tab key
  await page.press('Tab');

  // Fill in the password field with "Admin"
  await page.fill('input[name="password"]', 'Admin');

  // Press the login button
  await page.click('button[name="login"]');

  // Click on the link "Verzeichnis Gewässergüte"
  await page.click('link', { exact: true, text: 'Verzeichnis Gewässergüte' });

  // Click on the icon "status-icon"
  await page.click('.d-icon.d-icon-bold.status-icon');

  // Click on the link "Dashboard Häufigkeit der"
  await page.click('link', { name: 'Dashboard Häufigkeit der' });

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});