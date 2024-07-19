import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// ...

test('test', async ({ page }) => {
  // ...
  await page.click('#RDxYr2vFytOijWjelj7P1');
  await page.waitForSelector('#workbook-create');
  await page.click('#workbook-create');
  await page.waitForSelector('#home');
  await page.click('#home');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.waitForSelector('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.waitForSelector('#disy-cadenza-access-form');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('#disy-cadenza-access-form .succeeded');
});