import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Neues Fenster erstellen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#toolbar-menu-item-new-window');
  await page.waitForSelector('#new-window-title');
  await page.click('#new-window-title');
  await page.waitForSelector('#new-window-content');
  await page.click('#new-window-content');
});