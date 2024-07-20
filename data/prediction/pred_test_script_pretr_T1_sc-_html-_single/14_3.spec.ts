import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Exportieren und Arbeitsmappe (*.zip)', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.click('Arbeitsmappe (*.zip)');
});