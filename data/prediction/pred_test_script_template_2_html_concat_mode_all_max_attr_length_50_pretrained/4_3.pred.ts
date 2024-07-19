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
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
});

// Playwright test code
test('Informationen zur Arbeitsmappe', async ({ page }) => {
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
});