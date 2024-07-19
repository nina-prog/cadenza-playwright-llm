import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
});

// UI test description actions
test('Click on the designer symbol in the tool bar', async ({ page }) => {
  await page.click('#navigationTrigger');
});

// Inputs
test('Enter data in the date picker', async ({ page }) => {
  await page.fill('DXt-vHvtTdAN73h-KBXUV', '2023-03-10');
});

// Links
test('Click on the link to the main content', async ({ page }) => {
  await page.click('#home');
});

// Buttons
test('Click on the button to save and publish', async ({ page }) => {
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
});

// Screenshot
test('Take a screenshot of the page', async ({ page }) => {
  await page.screenshot({ path: 'screenshot.png' });
});