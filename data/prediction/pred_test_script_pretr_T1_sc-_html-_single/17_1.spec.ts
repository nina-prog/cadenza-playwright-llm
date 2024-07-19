import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
});

// UI Test
test('UI Test', async ({ page }) => {
  // Navigate to the website
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username field
  await page.fill('input[name="username"]', 'Admin');

  // Press the login button
  await page.click('button[name="login"]');

  // Wait for the page to load
  await page.waitForLoadState();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});