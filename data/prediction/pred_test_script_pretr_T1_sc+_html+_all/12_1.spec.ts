import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigation-menu');
  await page.click('#skip-to-navigator');
  await page.click('#startpage-section-navigation-item');
  await page.click('#userSpecificLink');
  await page.click('#Benutzername');
  await page.fill('#Benutzername', 'Admin');
  await page.press('Tab');
  await page.click('#Anmelden');
});