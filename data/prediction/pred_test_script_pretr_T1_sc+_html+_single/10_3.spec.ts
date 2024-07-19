import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#DXt-vHvtTdAN73h-KBXUV');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#Anmelden');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.fill('Benutzername *', 'Admin');
  await page.click('#Anmelden');
  await page.click('#Verzeichnis Gewässergüte');
  await page.click('#Übersicht Messstellen');
  await page.click('#Informationen zur Arbeitsmappe');
  await page.click('#Speichern unter …');
  await page.click('#Speichern');
  await page.click('#Speichern und veröffentlichen');
  await page.click('#Zugriffseinstellungen');
  await page.click('#Neue Sicht');
  await page.click('#Mehr');
  await page.click('#Daten laden');
  await page.click('#Weitere Daten hinzufügen');
  await page.click('#interval');
  await page.fill('interval', '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000