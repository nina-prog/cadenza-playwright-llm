import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#Anmelden');
  await page.fill('input[placeholder="Benutzername"]', 'Admin');
  await page.fill('input[placeholder="Passwort"]', 'password');
  await page.click('button[name="Anmelden"]');
  await page.click('a[title="Verzeichnis Gewässergüte"]');
  await page.click('a[title="Übersicht Messstellen"]');
});