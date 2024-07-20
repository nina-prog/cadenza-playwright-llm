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
  await page.getByRole('button', { name: 'Zugriffseinstellungen' }).click();
  await page.getByRole('button', { name: 'Neue Sicht' }).click();
  await page.getByRole('button', { name: 'Mehr' }).click();
  await page.getByRole('button', { name: 'Daten laden' }).click();
  await page.getByRole('button', { name: 'Weitere Daten hinzufügen' }).click();
  await page.getByRole('button', { name: 'Speichern unter ...' }).click();
  await page.getByRole('button', { name: 'Speichern' }).click();
  await page.getByRole('button', { name: 'Speichern und veröffentlichen' }).click();
  await page.getByRole('button', { name: 'Zugriffseinstellungen' }).click();
});