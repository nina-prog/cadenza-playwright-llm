import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#JzotcIFHWyo2v97U5GakP');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#home');
  await page.click('#Messstellenkarte');
  await page.click('#Speichern');
  await page.click('#Speichern und veröffentlichen');
  await page.click('#Zugriffseinstellungen');
  await page.click('#Neue Sicht');
  await page.click('#Mehr');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#© Disy Informationssysteme GmbH');
  await page.click('#Über Disy');
});