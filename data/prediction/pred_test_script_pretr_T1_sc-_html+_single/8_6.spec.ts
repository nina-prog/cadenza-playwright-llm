import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#racv9RZo86Da9nimmVBR8');
  await page.fill('#interval', '30');
  await page.fill('#racv9RZo86Da9nimmVBR8', '2023-03-10');
  await page.click('#home');
  await page.click('#d-icon.d-icon-bold.status-icon');
  await page.click('#data-browser-panel');
  await page.click('#data-browser-panel');
});