import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsblätter verwalten', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the name "Test" in the navigation menu
  await page.click('h1:contains("Test")');

  // Click on the link "Arbeitsblätter verwalten" at the bottom of the page
  await page.click('button:contains("Arbeitsblätter verwalten")');

  // Enter the name "Test" in the input field
  await page.fill('input[name="name"]', 'Test');

  // Press the "Enter" key
  await page.press('Enter');

  // Click on the submit button
  await page.click('button[type="submit"]');

  // Wait for the page to load
  await page.waitForLoadState();

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});