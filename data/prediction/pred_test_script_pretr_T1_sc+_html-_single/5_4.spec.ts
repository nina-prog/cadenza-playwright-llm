import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the 3-dot button
  await page.click('.d-icon.d-icon-bold.status-icon');

  // Click on the link "Dashboard Häufigkeit der Messungen"
  await page.click('link', { name: 'Dashboard Häufigkeit der Messungen' });

  // Click on the link "Anzahl der Messungen pro Jahr"
  await page.click('link', { name: 'Anzahl der Messungen pro Jahr' });

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page.click('.chart-container');

  // Click on the chart
  await page