import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the three dots "Mehr" within the table view
  await page.locator('.table-view').click();

  // Wait for the table to expand
  await page.waitForSelector('.table-view .table-view-expanded');

  // Click on the table row with the first cell
  await page.locator('.table-view .table-view-expanded').click();

  // Click on the first cell in the table
  await page.locator('.table-view .table-view-expanded .table-view-cell').click();

  // Enter text in the first cell
  await page.locator('.table-view .table-view-expanded .table-view-cell').fill('Test');

  // Click on the second cell in the table
  await page.locator('.table-view .table-view-expanded .table-view-cell').click();

  // Enter text in the second cell
  await page.locator('.table-view .table-view-expanded .table-view-cell').fill('Test2');

  // Click on the third cell in the table
  await page.locator('.table-view .table-view-expanded .table-view-cell').click();

  // Enter text in the third cell
  await page.locator('.table-view .table-view-expanded .table-view-cell').fill('Test3');

  // Click on the fourth cell in the table
  await page.locator('.table-view .table-view-expanded .table-view-cell').click();

  // Enter text in the fourth cell
  await page.locator('.table-view .table-view-expanded .table-view-cell').fill('Test4');

  // Click on the fifth cell in the table
  await page.locator('.table-view .table-view-expanded .table-view-cell').click();