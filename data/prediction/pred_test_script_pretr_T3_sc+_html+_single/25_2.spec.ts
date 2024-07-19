import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#BkI8uuTGjSbZkbNTTXTa4');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe-Zugangsdaten_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe-TestRename_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe-Testmappe_Ladesaeulen_firstContent');
  await page.click('#disy-Cadenza');
  await page.click('#disy-Cadenza-Tutorials');
  await page.click('#disy-Cadenza-Lernmodule');
  await page.click('#disy-Cadenza-Onlinehilfe');
  await page.click('#disy-Cadenza-Webseite');
  await page.click('#disy-Cadenza-Lernmodule-1');
  await page.click('#disy-Cadenza-Lernmodule-2');
  await page.click('#disy-Cadenza-Lernmodule-3');
  await page.click('#disy-Cadenza-Lernmodule-4