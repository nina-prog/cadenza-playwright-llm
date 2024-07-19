import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
});

// UI Test Description
test('New View', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.waitForSelector('#AGI6xPJwmpli2_VfnYS24');
  await page.fill('AGI6xPJwmpli2_VfnYS24', '12.03.2023');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.waitForSelector('#home');
  await page.click('#home');
});

// Screenshot