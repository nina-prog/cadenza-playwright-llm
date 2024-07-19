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
});

// UI test description actions
test('Click on the "Übersicht Messstellen" link', async ({ page }) => {
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
});

// Generated Playwright test code
test('Click on the "Übersicht Messstellen" link', async ({ page }) => {
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
});