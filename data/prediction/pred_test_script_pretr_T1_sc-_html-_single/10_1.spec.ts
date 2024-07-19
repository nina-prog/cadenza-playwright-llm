import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('UI Test: Gewässergüte', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('link[title="Anmelden"]');
  await page.fill('input[name="benutzername"]', 'Admin');
  await page.fill('input[name="passwort"]', 'Admin');
  await page.click('button[title="Anmelden"]');
});