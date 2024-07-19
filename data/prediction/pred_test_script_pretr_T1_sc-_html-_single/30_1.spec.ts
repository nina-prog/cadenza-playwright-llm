import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
});

// UI Test
test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.waitForSelector('[data-testid="messstellen-uebersicht"]');
  await page.click('[data-testid="messstellen-uebersicht"]');
});

// Screenshot
test('Screenshot', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  const screenshot = await page.screenshot({ path: 'screenshot.png' });
  writeFileSync('screenshot.png', screenshot);
});