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

  // Gewaesser Repository Test
  const repositorySelect = await page.locator('#d-nav-tree-node_ROOT-Gewaesser_firstContent');
  await repositorySelect.click();

  // Verzeichnis Gewässergüte
  const gewassergueteNode = await page.locator('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await gewassergueteNode.click();

  // Verzeichnis Automobile
  const automobileNode = await page.locator('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await automobileNode.click();

  // Verzeichnis Ergänzende Geodaten
  const erganzendGeodatenNode = await page.locator('.d-nav-tree-node--main');
  await erganzendGeodatenNode.click();

  // Verzeichnis Zentrale Dienste
  const zentraleDiensteNode = await page.locator('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await zentraleDiensteNode.click();

  // Verzeichnis Meine Arbeitsmappen
  const meineArbeitsmappenNode = await page.locator('.d-nav-tree-node--main');
  await meineAr