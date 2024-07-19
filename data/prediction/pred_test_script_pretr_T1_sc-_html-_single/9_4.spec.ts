import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke auf X im Analysekontext', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByLabel('Analysekontext (ALT+⇧+1)').click();

  // Wait for the X button to appear
  await page.waitForSelector('button[aria-label="X"]');

  // Click on the X button
  await page.click('button[aria-label="X"]');

  // Verify that the X button was clicked
  expect(page.screenshot()).toMatchImage('expected-screenshot');
});