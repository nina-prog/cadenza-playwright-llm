import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByLabel('Designer (ALT+⇧+2)').click();
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#navigationTrigger');
  await page.click('#home');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#data-load');
  await page.click('#interval-start');
  await page.click('#interval-end');
  await page.click('#search-input');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');
  await page.click('#userSpecificLink-ellipsis