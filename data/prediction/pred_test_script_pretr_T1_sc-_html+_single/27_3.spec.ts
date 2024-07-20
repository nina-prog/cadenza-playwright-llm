import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[placeholder="Anmelden"]', 'Admin');
  await page.fill('input[placeholder="Benutzername"]', 'Admin');
  await page.click('input[type="submit"]');
  await page.waitForSelector('a[aria-label="Karte Messstellenkarte"]');
  await page.click('a[aria-label="Karte Messstellenkarte"]');
});