import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('home');
  await page.click('Anmelden');
  await page.fill('Benutzername', 'Admin');
  await page.fill('Benutzername', 'Admin');
  await page.press('Tab');
  await page.click('Anmelden');
  await page.click('Verzeichnis Gewässergüte');
  await page.click('Übersicht Messstellen');
  await page.click('Analysekontext (ALT+⇧+1)');
  await page.click('X');
});