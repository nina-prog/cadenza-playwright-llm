import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Mehr Option innerhalb der Diagramm-Sicht "Anzahl der Messungen pro Jahr"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();

  // Mehr Option innerhalb der Diagramm-Sicht "Anzahl der Messungen pro Jahr"
  const mehrButton = await page.locator('.d-icon.d-icon-more');
  await mehrButton.click();

  // Screenshot to understand the context of the test
  await page.screenshot({ path: 'screenshot.png' });
});