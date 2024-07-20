import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
await page.goto('http://localhost:8080/cadenza/');

// UI Test
test('Neue Arbeitsmappe', async ({ page }) => {
  // Click on the book icon in the navigation
  await page.click('[data-testid="book-icon"]');

  // Fill in the username field with "Admin"
  await page.fill('input[data-testid="username-field"]', 'Admin');

  // Press the "Anmelden" button
  await page.click('button[data-testid="login-button"]');

  // Wait for the page to load
  await page.waitForLoad();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});