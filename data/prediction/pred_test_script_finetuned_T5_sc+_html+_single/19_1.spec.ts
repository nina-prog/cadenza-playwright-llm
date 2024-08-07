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
  await page.getByText('Arbeitsmappe importieren').click();
  await page.getByText('Repository neu einlesen').click();
  await page.getByText('Zum Navigatorbaum springen').click();
  await page.getByText('Zum Hauptbereich springen').click();
  await page.getByText('Startseite').click();
  await page.getByText('Karte').click();
  await page.getByText('Verzeichnis Tutorial').click();
  await page.getByText('Verzeichnis Gewässergüte').click();
  await page.getByText('Verzeichnis Automobile').click();
  await page.getByText('Verzeichnis Ergände Geodaten').click();
  await page.getByText('Verzeichnis Zentrale Dienste').click();
  await page.getByText('Verzeichnis Meine Arbeitsmappen').click();
  await page.getByText('Arbeitsmappe Zugangsdaten').click();
  await page.getByText('Zugangsdaten').click();
  await page.getByText('disy Cadenza').click();
  await page.getByText('Tutorials').click();
  await page.getByText('Lernmodulen').click();
  await page.getByText('Onlinehilfe').click();
  await page.getByText('Webseite').click();
  await page.getByText('Lern