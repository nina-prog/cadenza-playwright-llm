import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#cn5zuaReL7NzmGx0bzyN4');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen');
  await page.click('#d-nav-tree-node--text ellipsis');
  await page.click('#disy-cadenza-v9.4.71');
  await page.click('#Willkommen-Cadenza');
  await page.click('#Benutzername *');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.click('#Anmelden');
  await page.click('#Mehr ...');
});