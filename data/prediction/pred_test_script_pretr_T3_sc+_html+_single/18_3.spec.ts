import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#o8470K7iqTKLHMJRzHDNh');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#Yxc-ZyHVUDrosRsblohXu');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#workbook-create-new-view-button');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill