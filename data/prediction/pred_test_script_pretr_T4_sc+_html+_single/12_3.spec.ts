import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#mTGs-lHYWrmDF9xBWkXlj');
  await page.fill('#q3KXw0uzfEZKGOJhxPoEy', 'Importieren');
  await page.click('#flAN6weIIZjMw_iJOZNRO');
  await page.fill('#flAN6weIIZjMw_iJOZNRO', 'Bitte geben Sie einen Namen ein.');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe_Ladesaeulen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Arbeitsmappe_Ladesaeulen_firstContent');
  await page.click('#disy-Cadenza-v9.4.71');
  await page.