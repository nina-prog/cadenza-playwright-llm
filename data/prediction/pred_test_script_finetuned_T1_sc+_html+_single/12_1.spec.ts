import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByTestId('skip-to-navigator').click();
  await page.getByTestId('skip-to-content').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Tutorial_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Gewässergüte_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Automobile_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Arbeitsmappe-Zugangsdaten_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-disy-Cadenza_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Tutorials_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-Lernmodule_firstContent').click();
  await page.getByTestId('d-nav-tree-node_ROOT-