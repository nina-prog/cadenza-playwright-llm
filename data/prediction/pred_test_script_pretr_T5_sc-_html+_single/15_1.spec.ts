import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// ...

test('test', async ({ page }) => {
  // ...
  // Navigate to the website
  await page.goto('http://localhost:8080/cadenza/');

  // ...
  // Click on the "Anmelden" link
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // ...
  // Fill in the username field with "Admin"
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByPlaceholder(' ').fill('Admin');

  // ...
  // Press the "Tab" key to move to the password field
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.keyboard.press('Tab');

  // ...
  // Fill in the password field with "password"
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.keyboard.type('password');

  // ...
  // Press the "Enter" key to submit the form
  await page.keyboard.press('Enter');

  // ...
  // Wait for the page to load
  await page.waitForLoadState();

  // ...
  // Click on the "Arbeitsmappe importieren" button
  await page.getByText('Arbeitsmappe importieren').click();

  // ...
  // Wait for the menu to open
  await page.waitForSelector('.d-nav-tree-node');

  // ...
  // Click on the "Verzeichnis Tutorial" menu item
  await page.click('.d-nav-tree-node_ROOT-Tutorial_firstContent');

  // ...
  // Wait for the menu to open
  await page.waitForSelector('.d-nav-tree-node');

  // ...
  // Click on the "Zugangsdaten