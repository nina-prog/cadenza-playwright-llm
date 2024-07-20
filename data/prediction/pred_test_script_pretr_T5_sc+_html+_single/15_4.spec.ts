import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByRole('button', { name: 'Übersicht' }).click();
});

// UI Test Description
test('Arbeitsblatt duplizieren', async ({ page }) => {
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#OOEisGrKe2DIegjfvqoBD');
  await page.click('#navigationTrigger');
  await page.click('#d-tag');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#OOEisGrKe2DIegjfvqoBD');
  await page.click('#navigationTrigger');
  await page.click('#d-tag');
});

// Screenshot