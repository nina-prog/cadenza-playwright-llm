import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="book-icon"]');
  await page.click('[data-testid="username-input"]');
  await page.fill('[data-testid="username-input"]', 'Admin');
  await page.press('Tab');
  await page.fill('[data-testid="username-input"]', 'Admin');
  await page.click('[data-testid="login-button"]');
});