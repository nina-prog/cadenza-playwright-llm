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
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.