import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Navigate to Tutorial folder
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent');

  // Click on "Arbeitsmappen Einstieg" and open three dots menu
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent .d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree-node--main');
  await page.click('.d-nav-tree