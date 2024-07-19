import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicken auf 3-Punkte-Button innerhalb der Karten-Sicht "Messstellenlage und Wasserschutzgebiete eingefärbt nach Landkreisen"', async ({ page }) => {
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

  // Add code to perform actions based on the UI test description
  // For example, click on a button or select an option

  // Use the screenshot to understand the context of the test
  await page.screenshot({ path: 'screenshot.png' });
});