import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsmappe "Testmappe_Ladesaeulen"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.waitForSelector('[data-testid="App"]');

  // Fill in the username
  await page.fill('input[data-testid="username"]', 'Admin');
  await page.press('input[data-testid="username"]');

  // Fill in the password
  await page.fill('input[data-testid="password"]', 'password');
  await page.press('input[data-testid="password"]');

  // Click on the "Anmelden" button
  await page.click('button[data-testid="signInButton"]');

  // Wait for the page to load
  await page.waitForLoadState();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});