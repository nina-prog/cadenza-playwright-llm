import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition test code
test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByRole('button', { name: 'Informationen zur Arbeitsmappe' }).click();
});

// UI test description
test('Klicke auf "Neues Arbeitsblatt"', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#UhE_yL3rYxv80fCTy0CPy');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#d-condition-date-picker--input');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#home');
  await page.click('#karta');
  await page.click('#disy Cadenza v9.4.71');
  await page.click('#ueber-disy');
  await page.click('#informationen-zur-arbeitmappe');
  await page.click('#messstellenliste');
  await page.click('#messstellenkarte');
  await page.click('#haefrequenz-der-messungen');
});