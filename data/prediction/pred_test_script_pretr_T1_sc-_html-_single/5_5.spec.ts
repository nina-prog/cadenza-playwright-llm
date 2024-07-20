import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Duplizieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername *', 'Admin');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Enter');
  await page.click('Verzeichnis Gewässergüte');
  const parentElement = await page.locator('.d-icon.d-icon-bold.status-icon');
  await parentElement.click();
  await page.click('Dashboard Häufigkeit der');
  await page.click('Anzahl der Messungen pro Jahr');
  await page.click('Mehr …');
});