import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#byKR_MY-yZggNPqFs1XiT');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#data-load-button');
  await page.click('#interval-input');
  await page.click('#interval-input');
  await page.click('#select2-search__field');
  await page.click('#home');
  await page.click('#map');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#submit-button');
  await page.click('#test');
  await page.click('#add-view-button');
  await page.click('#userSpecificLink.ellipsis.hidden-xs');
  await page.click('#userSpecificLink.ellipsis');
});