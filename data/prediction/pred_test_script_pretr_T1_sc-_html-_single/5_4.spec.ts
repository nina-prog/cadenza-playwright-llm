import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Anzahl der Messungen pro Jahr', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#threeDots');
  await page.click('#dashboardLink');
  await page.click('#frequencyLink');
  await page.click('#yearLink');
  await page.click('#yearInput');
  await page.fill('Admin');
  await page.press('Tab');
  await page.fill('Admin');
  await page.press('Enter');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');
  await page.click('#chart-container');