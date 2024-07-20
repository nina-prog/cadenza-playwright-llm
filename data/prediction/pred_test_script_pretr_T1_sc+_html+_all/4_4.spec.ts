import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('home');
  await page.click('Neues Arbeitsblatt');
  await page.click('Informationen zur Arbeitsmappe');
});