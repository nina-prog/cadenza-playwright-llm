import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Perform actions based on the UI test description
  await page.waitForSelector('[data-testid="cadenz-reporting-analytics"]');
  await page.click('[data-testid="cadenz-reporting-analytics"]');

  // Take a screenshot
  await page.screenshot({ path: 'cadenz-reporting-analytics.png' });

  // Write the screenshot to a file
  writeFileSync('cadenz-reporting-analytics.png', '');
});