import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke auf X im Designer', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByLabel('Designer (ALT+⇧+2)').click();

  // Wait for the designer to be opened
  await page.waitForSelector('.designer-container');

  // Click on the X in the designer
  await page.click('.close-button');

  // Verify that the designer is closed
  await page.waitForSelector('.designer-container', { hidden: true });

  // Take a screenshot to verify the test
  await page.screenshot({ path: 'screenshot.png' });
});