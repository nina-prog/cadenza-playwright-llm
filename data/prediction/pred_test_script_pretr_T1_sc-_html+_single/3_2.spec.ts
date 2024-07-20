import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Löschen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Tutorial').click();
  await page.getByLabel('Arbeitsmappe Arbeitsmappen').hover();
  await page.getByLabel('Arbeitsmappe Arbeitsmappen').getByLabel('Mehr … (A)').click();
  await page.waitForSelector('#navigationTrigger');
  await page.click('#navigationTrigger');
  await page.waitForSelector('#hB4TSaOds1so2cJ4oClNg');
  await page.click('#hB4TSaOds1so2cJ4oClNg');
  await page.waitForSelector('#workbook-create');
  await page.click('#workbook-create');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.waitForSelector('#d-nav-tree-node