import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();

  // Add code to retrieve the links from the website
  const links = await page.evaluate(() => {
    const links = document.querySelectorAll('a');
    return Array.from(links).map((link) => link.href);
  });

  // Add code to set up the initial state
  await page.waitForSelector('[data-testid="skip-to-navigator"]');

  // Add code to the precondition
  await page.click('[data-testid="skip-to-navigator"]');

  // Add code to the UI test
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');

  // Add code to the UI test
  await page.waitForSelector('[data-testid="ellipsis"]');
  await page.click('[data-testid="ellipsis"]');

  // Add code to the UI test
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');

  // Add code to the UI test
  await page.waitForSelector('[data-testid="ellipsis"]');
  await page.click('[data-testid="ellipsis"]');

  // Add code to the UI test
  await page.waitForSelector('[data-testid="