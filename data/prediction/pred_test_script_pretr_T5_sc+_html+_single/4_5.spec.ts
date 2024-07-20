import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByRole('button', { name: 'Informationen zur Arbeitsmappe' }).click();
  await page.getByRole('menuitem', { name: 'Neues Arbeitsblatt' }).click();
});

// UI Test Description
test('Hinzufügen', async ({ page }) => {
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#Gs8sjm8hXUN3REGZhQMVA');
  await page.click('#MNiyGlBv57ilW1FJJOD7W');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#xwRTcTml8OeMqLaDY3_Ef');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
});

// Screenshot