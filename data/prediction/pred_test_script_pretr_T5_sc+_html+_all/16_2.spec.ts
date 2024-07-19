import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();

  // Add code to navigate to the new view
  await page.click('#AGI6xPJwmpli2_VfnYS24');

  // Add code to interact with the map
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');

  // Add code to interact with the data table
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');
  await page.click('#button-s');