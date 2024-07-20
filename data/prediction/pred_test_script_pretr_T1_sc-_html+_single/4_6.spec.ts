import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[name="login"]');
  await page.waitForSelector('a[href*="/cadenza/"]');
  await page.click('a[href*="/cadenza/"]');
  await page.waitForSelector('button[aria-label="Arbeitsblätter verwalten"]');
  await page.click('button[aria-label="Arbeitsblätter verwalten"]');
  await page.waitForSelector('input[name="name"]');
  await page.fill('input[name="name"]', 'Test');
  await page.click('button[type="submit"]');
});