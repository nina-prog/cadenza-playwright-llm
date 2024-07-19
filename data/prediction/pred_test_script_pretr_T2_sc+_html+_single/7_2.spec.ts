import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
});

// UI test description actions
test('Open Messstellen-Monitoring', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#home');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent');
  await page.click('#d-nav-tree-node--main');
  await page.click('#d-hover-context');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');
  await page.click('#startpage-section