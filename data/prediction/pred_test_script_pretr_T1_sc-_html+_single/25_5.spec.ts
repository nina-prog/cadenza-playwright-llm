import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#xljxMP9ZbLvbf9URFDVxi');
  await page.click('#FW7UscVqBhzpyx_3HbTEB');
  await page.click('#UHZDTq7Kavm_Aj5vfmBKb');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
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
  await page.click('#Tutorials');
  await page.click('#Lernmodulen');
  await page.click('#Onlinehilfe');
  await page.click('#Webseite');
  await page.click('#Lernmodulen');
  await page.click('#1');
  await page.click('#2