import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('home');
  await page.click('#hvrJtnyWAK1fX8Fs_1T6y');
  await page.fill('input[placeholder="dd.MM.yyyy - dd.MM.yyyy"]', '01.01.2023');
  await page.fill('input[placeholder="Suche"]', 'Test');
  await page.click('button[aria-label="Messwert Start des Wertebereichs"]');
  await page.click('button[aria-label="Messwert Ende des Wertebereichs"]');
  await page.click('button[aria-label="Suchen"]');
  await page.click('button[aria-label="Anmelden"]');
  await page.click('button[name="Benutzername"]');
  await page.fill('input[placeholder="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[placeholder=" "]', 'Admin');
  await page.click('button[name="Anmelden"]');
  await page.click('a[title="Verzeichnis Gewässergüte"]');
  await page.click('a[title="Messstellen-Monitoring"]');
});