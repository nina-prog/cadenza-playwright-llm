import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.fill('#CIBucl1_MfMjl_i7IpIMg', 'Admin');
  await page.fill('#CIBucl1_MfMjl_i7IpIMg', 'Admin');
  await page.press('Tab');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl