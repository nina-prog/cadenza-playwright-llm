import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add the following lines to perform the actions in the UI test description
  await page.click('#startpage-section-navigation-item-1');
  await page.click('#startpage-section-navigation-item-2');
  await page.click('#startpage-section-navigation-item-3');
  await page.click('#startpage-section-navigation-item-4');
  await page.click('#startpage-section-navigation-item-5');
  await page.click('#startpage-section-navigation-item-6');
  await page.click('#startpage-section-navigation-item-7');
  await page.click('#disy-cadenza-v9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#cadenza-version-9-4-71');
  await page.click('#c