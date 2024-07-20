import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#DXt-vHvtTdAN73h-KBXUV');
  await page.fill('#interval', '30');
  await page.fill('#DXt-vHvtTdAN73h-KBXUV', '2019-01-01');
  await page.click('#skip-to-navigator');
  await page.click('#home');
  await page.click('#map');
  await page.click('#userSpecificLink.ellipsis.hidden-xs');
  await page.click('#userSpecificLink.ellipsis');
});