import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Wähle als Repository "Ladesaeulen"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="repository-selector"]');
  await page.waitForSelector('[data-testid="repository-item"]');
  await page.click('[data-testid="repository-item"]');
  await page.waitForSelector('[data-testid="repository-selector"]');
  await page.click('[data-testid="repository-selector"]');
});