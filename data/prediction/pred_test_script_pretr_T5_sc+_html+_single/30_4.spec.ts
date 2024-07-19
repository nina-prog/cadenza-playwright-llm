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
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  const page1 = await page1Promise;
  await page1.locator('.d-worksheet-view-toolbar--spacer').hover();
  await page1.getByRole('button', { name: 'Mehr …' }).click();
});

// UI Test Description
test('Duplizieren', async ({ page }) => {
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#XiLJl6B9eNiukNp9-o_i7');
  await page.click('#navigationTrigger');
  await page.click('#button-icon-1');
  await page.click('#button-s-1');
  await page.click('#button-s-2');
  await page.click('#button-icon-2');
  await page.click('#button-s-3');
  await page.click('#button-s-4');
  await page.click('#button-icon-3');
  await