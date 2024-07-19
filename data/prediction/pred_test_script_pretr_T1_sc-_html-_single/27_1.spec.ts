import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
});

// UI Test
test('Messstellenkarte suchen', async ({ page }) => {
  await page.waitForSelector('[data-testid="search-input"]');
  await page.fill('[data-testid="search-input"]', 'Messstellenkarte');
  await page.click('[data-testid="search-button"]');

  // Additional actions
  await page.waitForSelector('[data-testid="map-container"]');
  await page.screenshot({ path: 'messstellenkarte.png' });
});