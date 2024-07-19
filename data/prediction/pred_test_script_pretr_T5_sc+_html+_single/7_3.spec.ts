import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Messstellen-Monitoring' }).click();

  // Add code to the precondition based on the UI Test Description
  await page.waitForSelector('button[aria-label="Neue Sicht"]');
  await page.click('button[aria-label="Neue Sicht"]');

  // Add not more than 3 lines of code
  await page.waitForSelector('button[aria-label="Zum Hauptbereich springen"]');
  await page.click('button[aria-label="Zum Hauptbereich springen"]');
  await page.waitForSelector('button[aria-label="Zum Navigatorbaum springen"]');
  await page.click('button[aria-label="Zum Navigatorbaum springen"]');

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});