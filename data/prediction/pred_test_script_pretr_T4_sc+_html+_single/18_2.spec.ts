import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#RxDAn7PnJJK1JgeKh8BEv');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view-button');
  await page.click('#home');
  await page.click('#button-icon-add-view-button');
  await page.click('#add-view