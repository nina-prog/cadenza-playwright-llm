import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigation-menu');
  await page.click('#workbook-create');
  await page.click('#import-button');
  await page.click('#select-button');
  await page.click('#search-button');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe-Zugangsdaten_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zugangsdaten_firstContent');
  await page.click('#d-nav-tree-node_ROOT-disy-Cadenza_firstContent');
  await page.click('#d-nav-tree-node_ROOT-©-Disy-Informationssysteme-GmbH_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Über-Disy_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Willkommen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Willkommen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Willkommen_firstContent');
  await page.click('#d-nav-