import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#Automobile');
  await page.click('#General');
  await page.click('#Geobasis');
  await page.click('#Gewässer');
  await page.click('#Ladesaeulen');
  await page.click('#Personal');
  await page.click('#Self-Service Repository');
  await page.click('#Tutorial');

  // Additional actions based on the UI-Test description
  // ...

  await page.click('#create-workbook-button');
});