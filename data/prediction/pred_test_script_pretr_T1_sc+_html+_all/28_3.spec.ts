import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();

  // Mehr-Button
  const mehrButton = await page.locator('.d-icon.d-icon-bold.status-icon');
  await mehrButton.click();

  // Dashboard-Button
  const dashboardButton = await page.locator('Dashboard Häufigkeit der Messungen');
  await dashboardButton.click();

  // Screenshot
  await page.screenshot({ path: 'screenshot.png' });
});