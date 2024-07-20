import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[name="login"]');
  await page.waitForSelector('a[href="http://localhost:8080/cadenza/messstellen"]');
  await page.click('a[href="http://localhost:8080/cadenza/messstellen"]');
  await page.waitForSelector('button[title="Neues Arbeitsblatt"]');
  await page.click('button[title="Neues Arbeitsblatt"]');
});