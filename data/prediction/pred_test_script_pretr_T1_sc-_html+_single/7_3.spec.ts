import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[placeholder="Benutzername"]', 'Admin');
  await page.fill('input[placeholder="Passwort"]', 'password');
  await page.click('button[name="Anmelden"]');
  await page.waitForSelector('[data-testid="content-header"]');
  await page.click('[data-testid="content-header"]');
  await page.waitForSelector('[data-testid="new-view"]');
  await page.click('[data-testid="new-view"]');
  await page.waitForSelector('[data-testid="chart-container"]');
  await page.click('[data-testid="chart-container"]');
});