import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#BkI8uuTGjSbZkbNTTXTa4');
  await page.click('Zum Navigatorbaum springen');
  await page.click('Zum Hauptbereich springen');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#Arbeitsmappe-Zugangsdaten');
  await page.click('#d-nav-tree-node--text ellipsis');
  await page.click('#disy-Cadenza');
  await page.click('#Tutorials');
  await page.click('#Lernmodule');
  await page.click('#Onlinehilfe');
  await page.click('#Webseite');
  await page.click('#Lernmodule');
  await page.click('#1');
  await page.click('#2');
  await page.click('#3');
  await page.click('#4');
  await page.click('#5');
  await page.click('#6');
  await page.click('#7');
  await page.click('#disy-Cadenza-v9.4.71');
  await page.click('#©-Disy-Informationssysteme-GmbH');
  await page.click('#Über-Disy');
});