import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#hB4TSaOds1so2cJ4oClNg');
  await page.click('#Umbenennen …');
  await page.click('#Link in Zwischenablage kopieren');
  await page.click('#Arbeitsmappe testen');
  await page.click('#Neue Version importieren');
  await page.click('#Arbeitsmappe exportieren');
  await page.click('#Löschen …');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine Arbeitsmappen');
  await page.click('#Arbeitsmappe Zugangsdaten');
  await page.click('#disy Cadenza');
  await page.click('#Tutorials');
  await page.click('#Lernmodulen');
  await page.click('#Onlinehilfe');
  await page.click('#Webseite');
  await page.click('#1');
  await page.click('#2');
  await page.click('#3');
  await page.click('#4');
  await page.click('#5');
  await page.click('#6');
  await page.click('#7');
  await page.click('#disy Cadenza v9.4.71');