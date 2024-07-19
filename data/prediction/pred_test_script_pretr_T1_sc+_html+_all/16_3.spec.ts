import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#workbook-create-new-view-button');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.2023');
  await page.click('#d-condition-date-picker--input');
  await page.fill('#d-condition-date-picker--input', '01.01.202