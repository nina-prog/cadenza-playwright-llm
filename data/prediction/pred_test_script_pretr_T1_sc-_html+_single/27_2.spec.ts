import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Messstellenkarte', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#home');
  await page.click('#disy Cadenza');
  await page.click('#Tutorials');
  await page.click('#Lernmodulen');
  await page.click('#Onlinehilfe');
  await page.click('#Webseite');
  await page.click('#Lernmodulen');
  await page.click('#1');
  await page.click('#2');
  await page.click('#3');
  await page.click('#4');
  await page.click('#5');
  await page.click('#6');
  await page.click('#7');
  await page.fill('input[placeholder="Suche"]', 'Messstellenkarte');
  await page.press('Enter');
});