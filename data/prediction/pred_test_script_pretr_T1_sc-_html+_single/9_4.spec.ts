import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[name="login"]');
  await page.waitForSelector('a[href="http://localhost:8080/cadenza/gewasserguet/uebersicht"]');
  await page.click('a[href="http://localhost:8080/cadenza/gewasserguet/uebersicht"]');
  await page.waitForSelector('a[href="http://localhost:8080/cadenza/gewasserguet/analysekontext"]');
  await page.click('a[href="http://localhost:8080/cadenza/gewasserguet/analysekontext"]');
  await page.waitForSelector('button[aria-label="Analysekontext (ALT+⇧+1)"]');
  await page.click('button[aria-label="Analysekontext (ALT+⇧+1)"]');
});