import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Mehr Karten anzeigen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="three-dots"]');
  await page.waitForSelector('[data-testid="map-view"]');
  await page.click('[data-testid="map-view"]');
});