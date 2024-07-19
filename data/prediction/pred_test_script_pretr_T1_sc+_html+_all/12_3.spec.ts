import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Select "Datei *" and choose "Testmappe_Ladesaeulen.zip"
  await page.click('label[for="file-input"]');
  await page.fill('input[type="file"]', 'Testmappe_Ladesaeulen.zip');
  await page.click('button[type="submit"]');

  // Click "Anmelden" button
  await page.click('button[name="login"]');

  // Click "Mehr ..." and select "Arbeitsmappe importieren"
  await page.click('button[title="Mehr ..."]');
  await page.click('menuitem[title="Arbeitsmappe importieren"]');

  // Wait for the import to complete
  await page.waitForSelector('div.message');

  // Take a screenshot
  await page.screenshot({ path: 'test-screenshot.png' });
});