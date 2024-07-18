import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Diasy Cadenzza', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername', 'Admin');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
});