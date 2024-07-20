import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#data-input');
  await page.fill('data-input', '2023-03-10');
  await page.click('#interval-input');
  await page.fill('interval-input', '2023-03-10');
  await page.click('#search-input');
  await page.fill('search-input', 'Suche');
  await page.click('#home');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#data-input');
  await page.fill('data-input', '2023-03-10');
  await page.click('#interval-input');
  await page.fill('interval-input', '2023-03-10');
  await page.click('#search-input');
  await page.fill('search-input', 'Suche');
  await page.click('#home');
  await page.click('#CIBucl1_MfMjl_i7IpIMg