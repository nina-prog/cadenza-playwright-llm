import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Text', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Text" under "Statische Sicht"
  await page.click('#text-button');

  // Wait for the text to appear
  await page.waitForSelector('#text-output');

  // Get the text from the output
  const text = await page.textContent('#text-output');

  // Expect the text to be "Hello World"
  expect(text).toBe('Hello World');
});