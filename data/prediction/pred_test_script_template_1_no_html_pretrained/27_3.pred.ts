import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the three dots "Mehr" within the cards view
  await page.waitForSelector('[data-testid="cards-view-more-button"]');
  await page.click('[data-testid="cards-view-more-button"]');

  // Wait for the map to load
  await page.waitForSelector('[data-testid="map"]');

  // Take a screenshot of the map
  await page.screenshot({ path: 'map.png' });

  // Write the screenshot to the file
  writeFileSync('map.png', '');
});