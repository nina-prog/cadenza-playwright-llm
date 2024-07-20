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
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByRole('button', { name: 'Informationen zur Arbeitsmappe' }).click();
  await page.getByRole('menuitem', { name: 'Neues Arbeitsblatt' }).click();
  await page.getByLabel('Name des Arbeitsblatts *', { exact: true }).click();
  await page.getByLabel('Name des Arbeitsblatts *').fill('Test');
  await page.getByLabel('Name des Arbeitsblatts *').press('Enter');
  await page.getByRole('button', { name: 'Hinzufügen' }).click();
});