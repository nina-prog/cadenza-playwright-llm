import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Additional actions
  await page.click('#navigationTrigger');
  await page.click('#RDxYr2vFytOijWjelj7P1');
  await page.click('#workbook-create');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen');
  await page.click('#Arbeitsmappe-Zugangsdaten');
  await page.click('#disy-Cadenza-v9.4.71');
  await page.click('#Benutzername *');
  await page.click('#Benutzername *');
  await page.click('#Anmelden');
});