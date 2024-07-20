import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#RDxYr2vFytOijWjelj7P1');
  await page.click('#workbook-create');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Meine-Arbeitsmappen_firstContent');
  await page.click('#Arbeitsmappe-Zugangsdaten');
  await page.click('#disy-Cadenza-v9.4.71');
  await page.click('#Benutzername *');
  await page.click('#Benutzername *');
  await page.click('#Anmelden');
  await page.click('#Benutzername *');
  await page.click('#Benutzername *');
  await page.click('#Anmelden');
  await page.click('#Benutzername *');
  await page.click('#Benutzername *');
  await page.click('#Anmelden');
  await page.click('#Benutzername *');
  await page.click('#Benutzername *');
  await page.click('#Anmelden');
  await page.click('#Benutzername *');
  await page.click('#Benutzername *');
  await page.click('#Anmelden');
  await page.click('#Benutzername *');
  await page.click('#Benutz