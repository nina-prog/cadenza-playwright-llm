import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Testmappe_Ladesaeulen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername', 'Admin');
  await page.click('Anmelden');
  await page.hover('Testmappe_Ladesaeulen');
});