import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Designersymbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the link to login
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Enter the username "Admin"
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on the designer symbol in the toolbar
  await page.getByTestId('designer-icon').click();

  // Close the settings panel
  await page.getByTestId('view-settings-panel').getByLabel('Schließen (⇧+ESC)').click();

  // Take a screenshot of the page
  await page.screenshot({ path: 'ui-test-designersymbol.png' });
});