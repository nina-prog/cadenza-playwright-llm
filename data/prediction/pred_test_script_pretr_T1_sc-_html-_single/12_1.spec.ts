import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
await page.goto('http://localhost:8080/cadenza/');

// Test
test('UI Test', async ({ page }) => {
  // Follow the steps in the UI test description
  await page.click('#three-dots');
});