import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to the precondition based on the UI Test Description
  await page.waitForSelector('button[aria-label="Zur Navigatorbaum springen"]');
  await page.click('button[aria-label="Zur Navigatorbaum springen"]');
  await page.waitForSelector('button[aria-label="Zum Hauptbereich springen"]');
  await page.click('button[aria-label="Zum Hauptbereich springen"]');
  await page.waitForSelector('a[href="http://localhost:8080/startseite"]');
  await page.click('a[href="http://localhost:8080/startseite"]');
  await page.waitForSelector('a[href="http://localhost:8080/karte"]');
  await page.click('a[href="http://localhost:8080/karte"]');
  await page.waitForSelector('a[href="http://localhost:8080/verzeichnis-tutorial"]');
  await page.click('a[href="http://localhost:8080/verzeichnis-tutorial"]');
  await page.waitForSelector('a[href="http://localhost:8080/verzeichnis-gewaschegue"]');
  await page.click('a[href="http://localhost:8080/verzeichnis-gewaschegue"]');
  await page.waitForSelector('a[href="http://localhost:8080/verzeichnis-automobile"]');
  await page.click('a[href="http://localhost:8080/verzeichnis