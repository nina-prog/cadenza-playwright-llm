import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="login-button"]');
  await page.fill('input[data-testid="username-input"]', 'Admin');
  await page.fill('input[data-testid="password-input"]', 'password');
  await page.click('button[data-testid="login-button"]');
  await page.waitForNavigation();
  await page.click('[data-testid="import-button"]');
});