import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Exportieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#OOE3cVMA-Hb5e1PzGVCFc');
  await page.click('#R2eVo5K2HojmuhYuc3d_2');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#skip-to-navigator');
  await page.click('#home');
  await page.click('#d-tag');
  await page.click('#button-icon');
  await page.click('#button-borderless');
  await page.click('#button-s');
  await page.click('#select2-search__field');
  await page.fill('#OOE3cVMA-Hb5e1PzGVCFc', 'dd.MM.yyyy - dd.MM.yyyy');
  await page.click('#exportieren-button');
  await page.screenshot({ path: 'exportieren.png' });
});