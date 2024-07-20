import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Exportieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#export-button');
  await page.screenshot({ path: 'export.png' });
});