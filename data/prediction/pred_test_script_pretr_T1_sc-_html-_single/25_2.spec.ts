import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsmappe importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.click('Arbeitsmappe importieren');
  await page.waitForSelector('input[type="text"]');
  await page.fill('input[type="text"]', 'Test-Arbeitsmappe');
  await page.click('input[type="submit"]');
  await page.waitForSelector('div.alert');
  await page.screenshot({ path: 'test-screenshot.png' });
});