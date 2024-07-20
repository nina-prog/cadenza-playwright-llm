import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Diasy Cadenzza', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('link', { name: 'Anmelden' });
  await page.fill('input[name="benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[placeholder=" "]', 'Admin');
  await page.click('button', { name: 'Anmelden' });
  await page.hover('a');
});