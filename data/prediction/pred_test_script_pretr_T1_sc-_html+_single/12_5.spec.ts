import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="_event"]', 'importieren');
  await page.click('button[data-testid="importieren-button"]');
  await page.waitForSelector('input[type="file"]');
  await page.click('input[type="file"]');
  await page.waitForSelector('input[name="file"]');
  await page.fill('input[name="file"]', 'Testmappe_Ladesaeulen.zip');
  await page.click('input[name="file"]');
  await page.waitForSelector('option[value="Repository Ladesaeulen"]');
  await page.click('option[value="Repository Ladesaeulen"]');
});