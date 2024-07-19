import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UITest', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#create-workbook-button');
  await page.click('#menuitem_Gewässer');
});