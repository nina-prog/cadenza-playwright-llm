import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByPlaceholder('Suchen nach …').click();
  await page.getByPlaceholder('Suchen nach …').fill('Messstellenkarte');
  await page.getByPlaceholder('Suchen nach …').press('Enter');
});

// UI Test Description
test('Open Messstellenkarte', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node--text ellipsis');
  await page.click('#disy Cadenza');
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
  await page.click('#© Disy Informationssysteme GmbH');
  await page.click('#Über Disy');
});

// Screenshot