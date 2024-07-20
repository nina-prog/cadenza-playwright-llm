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
});

// UI Test Description
test('Klicke auf den 3-Punkte-Button innerhalb der Karten-Sicht "Messstellenlage und Wasserschutzgebiete eingefärbt nach Landkreisen"', async ({ page }) => {
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
});

// Screenshot