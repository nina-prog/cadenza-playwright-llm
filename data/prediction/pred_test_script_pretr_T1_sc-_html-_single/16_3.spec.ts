import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke unter "Sicht für Daten" auf "Karte"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Sicht für Daten');
  await page.click('Karte');
});