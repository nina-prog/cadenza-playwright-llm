import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#xljxMP9ZbLvbf9URFDVxi');
  await page.fill('#FW7UscVqBhzpyx_3HbTEB', 'Importieren');
  await page.click('#UHZDTq7Kavm_Aj5vfmBKb');
  await page.fill('#UHZDTq7Kavm_Aj5vfmBKb', 'Bitte geben Sie einen Namen ein.');
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
  await page.click('#disy Cadenza');
  await page.click('#disy Cadenza');
  await page.click('#disy Cadenza');
  await page.click('#disy Cadenza');
  await page.click('#disy Cadenza');
  await page.click('#disy Cadenza');
  await page.click('#disy Caden