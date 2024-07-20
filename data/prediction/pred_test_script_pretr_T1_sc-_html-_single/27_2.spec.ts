import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Öffnen des Arbeitsblatts "Messstellenkarte"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="login-button"]');
  await page.waitForSelector('[data-testid="login-form"]');
  await page.fill('[data-testid="username-input"]', 'Admin');
  await page.fill('[data-testid="password-input"]', 'password');
  await page.click('[data-testid="login-button"]');
  await page.waitForSelector('[data-testid="app-header"]');
  await page.click('[data-testid="app-header-menu-toggle"]');
  await page.waitForSelector('[data-testid="app-header-menu"]');
  await page.click('[data-testid="app-header-menu-item"]');
  await page.waitForSelector('[data-testid="app-header-menu-item"]');
  await page.click('[data-testid="app-header-menu-item"]');
  await page.waitForSelector('[data-testid="app-header-menu-item"]');
  await page.click('[data-testid="app-header-menu-item"]');
  await page.waitForSelector('[data-testid="app-header-menu-item"]');
  await page.click('[data-testid="app-header-menu-item"]');
  await page.waitForSelector('[data-testid="app-header-menu-item"]');
  await page.click('[data-testid="app-header-menu-item"]');
  await page.waitForSelector('[data-testid="app-header-menu-item"]');
  await page.click('[data-testid="app-header-menu-item"]');
  await page.waitForSelector('[data-testid="app-header-menu-item