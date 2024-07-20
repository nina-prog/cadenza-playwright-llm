import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Säulendiagramm', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();

  // Säulendiagramm
  const columnDiagram = await page.$('#säulendiagramm');
  const chartTitle = await columnDiagram.$('h2');
  const chartSubTitle = await columnDiagram.$('h3');
  const chartLegend = await columnDiagram.$('legend');

  // Assertions
  expect(await chartTitle.textContent()).toBe('Säulendiagramm');
  expect(await chartSubTitle.textContent()).toBe('Zeilen: 10, Spalten: 10');
  expect(await chartLegend.textContent()).toBe('Legende');

  // Take screenshot
  await page.screenshot({ path: 'säulendiagramm.png' });
});