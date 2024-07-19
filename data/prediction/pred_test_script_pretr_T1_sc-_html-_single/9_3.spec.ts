import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Analysekontextsymbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#analysekontextsymbol');
});