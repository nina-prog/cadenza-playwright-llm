import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#xp2Fll8xpYOJ6n_iCItX0');
  await page.click('#Umbenennen …');
  await page.click('#link in Zwischenablage kopieren');
  await page.click('#Arbeitsmappe testen');
  await page.click('#Neue Version importieren');
  await page.click('#Arbeitsmappe exportieren');
  await page.click('#Löschen …');

  await page.click('#select2-search__field');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine Arbeitsmappen');
  await page.click('#Arbeitsmappe Zugangsdaten');

  await page.click('#disy Cadenza v9.4.71');
  await page.click('#© Disy Informationssysteme GmbH');
  await page.click('#Über Disy');
});