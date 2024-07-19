import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to perform the task based on the UI Test Description
  await page.waitForSelector('[data-testid="cadenz-reporting-analytics"]');
  await page.click('[data-testid="cadenz-reporting-analytics"]');

  // Add code to perform the task based on the Screenshot
  await page.waitForSelector('[data-testid="cadenz-reporting-analytics"]');
  await page.click('[data-testid="cadenz-reporting-analytics"]');

  // Write the test result to a file
  writeFileSync('test-results.txt', 'Test passed');
});