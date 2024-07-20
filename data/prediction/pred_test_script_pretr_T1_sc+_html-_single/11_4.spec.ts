import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.click('button[title="Gewässer"]');
  await page.click('button[title="Arbeitsblatt"]');
  await page.click('button[title="Neues Arbeitsblatt"]');
});