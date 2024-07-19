import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the link to open the popup
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();

  // Wait for the popup to appear
  const page1Promise = page.waitForEvent('popup');
  await page1Promise;

  // Get the first element in the popup
  const firstElement = await page.waitForSelector('[data-testid="first-element"]');

  // Click on the first element
  await firstElement.click();

  // Wait for the second element to appear
  await page.waitForSelector('[data-testid="second-element"]');

  // Click on the second element
  await page.click('[data-testid="second-element"]');

  // Wait for the third element to appear
  await page.waitForSelector('[data-testid="third-element"]');

  // Click on the third element
  await page.click('[data-testid="third-element"]');

  // Wait for the fourth element to appear
  await page.waitForSelector('[data-testid="fourth-element"]');

  // Click on the fourth element
  await page.click('[data-testid="fourth-element"]');

  // Wait for the fifth element to appear
  await page.waitForSelector('[data-testid="fifth-element"]