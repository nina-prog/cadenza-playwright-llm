import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('a[href="http://localhost:8080/cadenza/importieren"]');
  await page.click('a[href="http://localhost:8080/cadenza/importieren"]');
  await page.waitForSelector('input[name="file"]');
  await page.fill('input[name="file"]', 'Testmappe_Ladesaeulen.zip');
  await page.fill('input[name="name"]', 'TestRename');
  await page.click('button[type="submit"]');
});