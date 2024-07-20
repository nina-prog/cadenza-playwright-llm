import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
});

// UI Test Description
test('Open Messstellenkarte', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#interval');
  await page.click('#interval');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIMg');
  await page.click('#CIBucl1_MfMjl_i7IpIM