import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('link[name="Anmelden"]');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.click('button[name="Anmelden"]');
  await page.click('label[for="select_repository"]');
  await page.click('option[value="Technik"]');
  await page.click('button[name="Importieren"]');
});