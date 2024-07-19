import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#k4kdt57JE_AR63P7ZioGN');
  await page.fill('#k4kdt57JE_AR63P7ZioGN', 'Admin');
  await page.press('Tab');
  await page.fill('#k4kdt57JE_AR63P7ZioGN', 'Admin');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#testmappe_ladesaeulen');
});