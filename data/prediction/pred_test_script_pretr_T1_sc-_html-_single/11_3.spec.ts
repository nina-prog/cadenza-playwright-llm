import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Neues Arbeitsblatt', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="toolbar-new-workbook-button"]');
  await page.click('[data-testid="menu-item-water"]');
});