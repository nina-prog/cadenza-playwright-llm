import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#cn5zuaReL7NzmGx0bzyN4');
  await page.click('Zum Navigatorbaum springen');
  await page.click('Zum Hauptbereich springen');
  await page.click('Zugangsdaten');
  await page.click('disy Cadenza v9.4.71');
  await page.click('© Disy Informationssysteme GmbH');
  await page.click('Über Disy');
});