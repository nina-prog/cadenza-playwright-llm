import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByRole('button', { name: 'Informationen zur Arbeitsmappe' }).click();
  await page.getByRole('menuitem', { name: 'Neues Arbeitsblatt' }).click();
  await page.getByLabel('Name des Arbeitsblatts *').click();
  await page.getByLabel('Name des Arbeitsblatts *').press('ControlOrMeta+a');
  await page.getByLabel('Name des Arbeitsblatts *').fill('Test');
  await page.getByTestId('submit-button').click();
});

// UI Test Description
await page.click('#navigationTrigger');
await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');