import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#hB4TSaOds1so2cJ4oClNg');
  await page.click('#Umbenennen.button');
  await page.click('#LinkInZwischenablageKopieren.button');
  await page.click('#ArbeitsmappeTesten.button');
  await page.click('#NeueVersionImportieren.button');
  await page.click('#ArbeitsmappeExportieren.button');
  await page.click('#Laeschen.button');
  await page.click('#Suche.button');
  await page.click('#SkipToNavigator.button');
  await page.click('#SkipToContent.button');
  await page.click('#Home.button');
  await page.click('#Karte.button');
  await page.click('#d-nav-tree-node_ROOT-Tutorial_firstContent.button');
  await page.click('#d-nav-tree-node_ROOT-Automobile_firstContent.button');
  await page.click('#d-nav-tree-node_ROOT-Gewaesserdie.button');
  await page.click('#d-nav-tree-node_ROOT-ZentraleDienste_firstContent.button');
  await page.click('#d-nav-tree-node_ROOT-MeineArbeitsmappen.button');
  await page.click('#ArbeitsmappeZugangsdaten.button');
  await page.click('#disyCadenza.button');
  await page.click('#uebersicht.button');
  await page.click('#Willkommen.button');
  await page.click('#uebersicht.button');
  await page.click('#Willkommen.button');
  await page.click('#uebersicht.button');
  await page.click('#Willkommen.button');