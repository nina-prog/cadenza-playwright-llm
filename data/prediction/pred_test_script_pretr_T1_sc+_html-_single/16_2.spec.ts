import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the "Neue Sicht" button
  await page.click('[aria-label="Neue Sicht"]');

  // Wait for the map to load
  await page.waitForSelector('#map');

  // Take a screenshot of the map
  await page.screenshot({ path: 'map.png' });

  // Write the screenshot to the file
  writeFileSync('map.png', '');
});