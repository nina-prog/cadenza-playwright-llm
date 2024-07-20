import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#I5Bj5YZYxqOKY-QrECyJm');
  await page.fill('#I5Bj5YZYxqOKY-QrECyJm', 'Admin');
  await page.press('Tab');
  await page.fill('#I5Bj5YZYxqOKY-QrECyJm', 'Admin');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#karte');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#© Disy Informationssysteme GmbH');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');
  await page.click('#userSpecificLink:not(.hidden-xs)');