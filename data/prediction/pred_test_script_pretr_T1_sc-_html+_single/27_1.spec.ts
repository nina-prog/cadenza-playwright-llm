import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Messstellenkarte Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Wait for the Messstellenkarte to be displayed
  await page.waitForSelector('[data-testid="map"]');

  // Take a screenshot of the Messstellenkarte
  await page.screenshot({ path: 'messstellenkarte.png' });

  // Verify that the Messstellenkarte is displayed
  expect(await page.screenshot({ path: 'messstellenkarte.png' })).toMatchImage('messstellenkarte.png');
});