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

  // Mehr
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');

  // Daten laden
  await page.click('#AN4ujnMQ1qNBLtVusJWHr');

  // Intervalle
  await page.click('.interval');
  await page.click('.interval');

  // Suchen
  await page.click('#AN4ujnMQ1qNBLtVusJWHr');

  // Skip to Navigator
  await page.click('#skip-to-navigator');

  // Skip to Content
  await page.click('#skip-to-content');

  // Startseite
  await page.click('#home');

  // Karte
  await page.click('#AN4ujnMQ1qNBLtVusJWHr');

  // Dashboard Häufigkeit der Messungen
  await page.click('#AN4ujnMQ1qNBLtVusJWHr');

  // Diagramm-Sicht "Anzahl der Messungen pro Jahr"
  await page.click('#AN4ujnMQ1qNBLtVusJWHr');

  // Mehr
  await page.click('#ad-hoc-settings-LO8EpTw_R