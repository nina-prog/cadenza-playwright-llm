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
test('Informationen zur Arbeitsmappe', async ({ page }) => {
  await page.click('#informationenZurArbeitsmappe');
});

// Playwright test code
test('Informationen zur Arbeitsmappe', async ({ page }) => {
  await page.click('#informationenZurArbeitsmappe');
  await page.waitForSelector('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.waitForSelector('#rD3uqXp-Nz7Wmy4XUvwDz');
  await page.click('#rD3uqXp-Nz7Wmy4XUvwDz');
  await page.waitForSelector('#skip-to-navigator');
  await page.click('#skip-to-navigator');
  await page.waitForSelector('#skip-to-content');
  await page.click('#skip-to-content');
  await page.waitForSelector('#home');
  await page.click('#home');
  await page.waitForSelector('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');