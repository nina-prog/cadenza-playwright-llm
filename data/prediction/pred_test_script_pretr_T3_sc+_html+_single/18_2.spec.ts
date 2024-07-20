import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#RxDAn7PnJJK1JgeKh8BEv');
  await page.click('#home');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#d-condition-date-picker--input');
  await page.click('#select2-search__field');
  await page.click('#userSpecificLink.ellipsis.hidden-xs');
  await page.click('#userSpecificLink.ellipsis');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpecificLink.hidden-xs');
  await page.click('#userSpec