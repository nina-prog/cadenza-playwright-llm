import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#d-icon.d-icon-bold.status-icon');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#d-icon.d-icon-bold.status-icon');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#d-icon.d-icon-bold.status-icon');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#d-icon.d-icon-bold.status-icon');
  await page.click('#d-nav-tree-node_ROOT-Testmappe_Ladesaeulen_firstContent');
  await page.click('#d-nav-tree-node--text');
  await page.click('#d-icon.d-icon-bold.status-icon');
  await page.click('#d-nav-tree-node_ROOT-disy-Cadenza_firstContent');