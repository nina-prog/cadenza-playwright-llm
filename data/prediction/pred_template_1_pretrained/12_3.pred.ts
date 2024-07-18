import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('[data-testid="file-input"]');
  await page.click('[data-testid="file-input"]');
  await page.waitForSelector('[data-testid="import-button"]');
  await page.click('[data-testid="import-button"]');
});