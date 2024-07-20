import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to perform the UI test
  await page.click('d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('d-nav-tree-node_ROOT-Arbeitsmappe-Zugangsdaten_firstContent');
  await page.click('d-nav-tree-node_ROOT-Zugangsdaten_firstContent');
  await page.click('disy-cadenza-v9.4.71');
  await page.click('© Disy Informationssysteme GmbH');
  await page.click('Über Disy');

  // Add code to take a screenshot
  await page.screenshot({ path: 'cadenza-ui-test.png' });
});