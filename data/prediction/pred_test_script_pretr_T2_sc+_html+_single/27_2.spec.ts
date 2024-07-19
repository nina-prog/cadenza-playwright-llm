import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
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

// Test code
test('Open Messstellenkarte', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node--text ellipsis');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node--text ellipsis');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');
  await page.click('#d-nav-tree-node--text ellipsis');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main d-hover-context');