import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Arbeitsmappe importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#BkI8uuTGjSbZkbNTTXTa4');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');
  await page.click('#button-icon');