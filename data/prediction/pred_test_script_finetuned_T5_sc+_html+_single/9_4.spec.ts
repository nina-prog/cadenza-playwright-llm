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
  await page.getByLabel('Analysekontext (ALT+⇧+1)').click();
  await page.getByText('Zum Navigatorbaum springen', { exact: true }).click();
  await page.getByText('Zum Hauptbereich springen', { exact: true }).click();
  await page.getByText('Startseite', { exact: true }).click();
  await page.getByText('Karte', { exact: true }).click();
  await page.getByText('disy Cadenza v9.4.71', { exact: true }).click();
  await page.getByText('© Disy Informationssysteme GmbH', { exact: true }).click();
  await page.getByText('Übersicht Messstellen', { exact: true }).click();
  await page.getByText('Analysekontext (ALT+⇧+1)', { exact: true }).click();
  await page.getByText('Zum Navigatorbaum springen', { exact: true }).click();
  await page.getByText('Zum Hauptbereich springen', { exact: true }).click();
  await page.getByText('Startseite', { exact: true }).click();
  await page.