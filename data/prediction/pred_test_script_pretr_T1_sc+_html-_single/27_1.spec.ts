import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#search-input');
  await page.fill('#search-input', 'Messstellenkarte');
  await page.click('#search-button');

  // Wait for the page to load
  await page.waitForTimeout(3000);

  // Take a screenshot of the page
  await page.screenshot({ path: 'cadenz-test.png' });

  // Close the browser
  await page.close();
});