import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Messstellenkarte', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByPlaceholder('Suchen nach …').click();
  await page.getByPlaceholder('Suchen nach …').fill('Messstellenkarte');
  await page.getByPlaceholder('Suchen nach …').press('Enter');

  // Add code to navigate to the Messstellenkarte page
  await page.waitForSelector('#home');
  await page.click('#home');

  // Add code to select the Messstellenkarte item from the navigation menu
  await page.waitForSelector('#startpage-section-navigation-item');
  await page.click('#startpage-section-navigation-item');

  // Add code to click on the Messstellenkarte link
  await page.waitForSelector('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');

  // Add code to fill out the form and submit it
  await page.fill('input[name="gwasserguetetext"]', 'Messstellenkarte');
  await page.click('input[type="submit"]');

  // Add code to check the result of the form submission
  await page.waitForSelector('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  await page.click('#d-nav-tree-node_ROOT-