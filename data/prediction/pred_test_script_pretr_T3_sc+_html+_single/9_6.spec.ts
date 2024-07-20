import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#I5Bj5YZYxqOKY-QrECyJm');
  await page.fill('#I5Bj5YZYxqOKY-QrECyJm', '1.1.2023');
  await page.fill('#interval', '2023-01-01 00:00:00');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#karten');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#disy Cadenza v9.4.71');