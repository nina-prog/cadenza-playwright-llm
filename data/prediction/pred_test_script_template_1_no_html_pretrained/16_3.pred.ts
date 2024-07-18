import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on "Sicht für Daten"
  await page.click('[aria-label="Sicht für Daten"]');

  // Click on "Karte"
  await page.click('[data-testid="map"]');

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});