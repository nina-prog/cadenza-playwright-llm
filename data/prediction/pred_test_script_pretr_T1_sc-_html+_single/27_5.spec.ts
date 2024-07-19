import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[name="login"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await page.waitForSelector('a[data-testid="export-button"]');
  await page.click('a[data-testid="export-button"]');
  await