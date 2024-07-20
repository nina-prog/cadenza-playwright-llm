import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#qqpnx9ca5oSlSFMqUuoU6');
  await page.fill('#qqpnx9ca5oSlSFMqUuoU6', 'Admin');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', 'dd.MM.yyyy - dd.MM.yyyy');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#select2-search__field', 'Suchen …');
  await page.click('#select2-search__field');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink');
  await page.click('#userSpecificLink