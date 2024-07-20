import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Übersicht Messstellen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="admin-login-link"]');
  await page.fill('[data-testid="username-input"]', 'Admin');
  await page.fill('[data-testid="password-input"]', 'password');
  await page.click('[data-testid="login-button"]');
  await page.click('[data-testid="sidebar-link"]');
  await page.click('[data-testid="wassergutetab"]');
  await page.click('[data-testid="messstationen-link"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.click('[data-testid="show-more-button"]');
  await page.