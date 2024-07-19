import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Mehr Optionen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#options-menu');
  await page.waitForSelector('#options-menu .option');

  const options = await page.evaluate(() => {
    const options = document.querySelectorAll('#options-menu .option');
    return options.map(option => option.textContent);
  });

  expect(options).toContain('Mehr Optionen');
  expect(options).toContain('Zurück');
  expect(options).toContain('Abbrechen');
});