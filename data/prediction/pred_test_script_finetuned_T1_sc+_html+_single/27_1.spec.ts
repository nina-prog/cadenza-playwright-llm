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
  await page.getByLabel('Suche *').click();
  await page.getByLabel('Suche *').fill('Messstellenkarte');
  await page.getByLabel('Suche *').press('Enter');
  await page.getByRole('button', { name: 'Karte anzeigen' }).click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.getByLabel('Karte anzeigen').click();
  await page.get