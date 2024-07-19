import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.waitForSelector('[data-testid="login-form"]');

  await page.click('[data-testid="login-form"]');
  await page.waitForSelector('[data-testid="username-input"]');

  await page.fill('[data-testid="username-input"]', 'Admin');
  await page.waitForSelector('[data-testid="password-input"]');

  await page.fill('[data-testid="password-input"]', 'password');
  await page.waitForSelector('[data-testid="login-button"]');

  await page.click('[data-testid="login-button"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.click('[data-testid="cadenz-header"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.click('[data-testid="cadenz-header"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.click('[data-testid="cadenz-header"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.click('[data-testid="cadenz-header"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.click('[data-testid="cadenz-header"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.click('[data-testid="cadenz-header"]');

  await page.waitForSelector('[data-testid="cadenz-header"]');
  await page.