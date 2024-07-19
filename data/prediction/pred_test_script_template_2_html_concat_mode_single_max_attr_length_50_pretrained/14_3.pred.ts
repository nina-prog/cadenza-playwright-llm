import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen', exact: true }).click();
  await page.getByTestId('workbook-header').getByRole('button', { name: 'Mehr' }).click();
});

// UI test description actions
test('Exportieren', async ({ page }) => {
  await page.click('#OOE3cVMA-Hb5e1PzGVCFc');
  await page.click('#R2eVo5K2HojmuhYuc3d_2');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#OOE3cVMA-Hb5e1PzGVCFc');
  await page.click('#R2eVo5K2HojmuhYuc3d_2');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
});