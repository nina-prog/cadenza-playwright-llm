import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Gewaesser Repository Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByTestId('create-workbook-button').click();

  // Gewaesser Repository
  const repositoryLink = await page.locator('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click(repositoryLink);

  // Verzeichnis Gewässergüte
  const gewassergueteList = await page.locator('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  const firstItem = await gewassergueteList.first();
  const firstItemTitle = await firstItem.locator('.d-nav-tree-node__title');
  const firstItemLink = await firstItem.locator('a');
  const firstItemLinkText = await firstItemLink.text();
  expect(firstItemLinkText).toBe('Verzeichnis Gewässergüte');

  // Verzeichnis Automobile
  const automobileList = await page.locator('#d-nav-tree-node_ROOT-Automobile_firstContent');
  const firstItem = await automobileList.first();
  const firstItemTitle = await firstItem.locator('.d-nav-tree-node__title');
  const firstItemLink = await firstItem.locator('a');
  const firstItemLinkText = await firstItemLink.text();
  expect(firstItemLinkText).toBe('Verzeichnis Automobile');