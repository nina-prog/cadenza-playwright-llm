import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigation-menu');
  await page.click('#book-icon');
  await page.click('#workbook-create');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-icon');
  await page.click('#button-borderless');