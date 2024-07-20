import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('importieren Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#W_iWO-jgXfJAboYHEAMwT');
  await page.click('#workbook-create');
  await page.click('#jjV4Hwbw44ZVvaJXpIpWD');
  await page.fill('input[name="file"]', 'test.zip');
  await page.click('#b2igyAyn0LvjfK9CuVoHH');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe_Zugangsdaten_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe_TestRename_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe_Testmappe_Ladesaeulen_firstContent');
  await page.click('#disy Cadenza');
  await page.click('#Tutorials');
  await page.click('#Lernmodulen');
  await page.click('#Onlinehilfe');
  await page.click('#Webseite');
  await page