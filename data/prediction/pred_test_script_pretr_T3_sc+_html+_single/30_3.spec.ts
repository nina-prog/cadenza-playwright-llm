import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#JzotcIFHWyo2v97U5GakP');
  await page.click('#interval');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('Messstellenkarte');
  await page.click('Zugriffseinstellungen');
  await page.click('Neue Sicht');
  await page.click('Mehr');
  await page.click('Abbrechen');
  await page.click('Aktualisieren');
  await page.click('Daten laden');
  await page.click('Weitere Daten hinzufügen');
});