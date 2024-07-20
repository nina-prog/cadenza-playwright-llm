import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername', 'Admin');
  await page.press('Enter');
  await page.click('Verzeichnis Gewässergüte');
  const parentElement = await page.locator('.d-icon.d-icon-bold.status-icon');
  await parentElement.click();
});