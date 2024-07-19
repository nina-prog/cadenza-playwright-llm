import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Arbeitsmappe importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#BkI8uuTGjSbZkbNTTXTa4');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#disy-cadenza-tutorials');
  await page.click('#disy-cadenza-lernmodule');
  await page.click('#disy-cadenza-onlinehilfe');
  await page.click('#disy-cadenza-webseite');
  await page.click('#disy-cadenza-lernmodule-1');
  await page.click('#disy-cadenza-lernmodule-2');
  await page.click('#disy-cadenza-lernmodule-3');
  await page.click('#disy-cadenza-lernmodule-4');
  await page.click('#disy-cadenza-lernmodule-5');
  await page.click('#disy-cadenza-lernmodule-6');
  await page.click('#disy-cadenza-lernmodule-7');
  await page.click('#disy-cadenza-disy-caden