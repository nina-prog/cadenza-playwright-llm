import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Gewässergüte', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Gewässergüte-Seite geöffnet sein
  const gwassergueteElement = await page.$('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');
  expect(gwassergueteElement.exists()).toBe(true);

  // Verzeichnis Gewässergüte auswählen
  await page.click(gwassergueteElement);

  // Gewässergüte-Seite aktualisieren
  await page.waitForSelector('#d-nav-tree-node_ROOT-Gewässergüte_firstContent .d-nav-tree-node--main');
  const gwassergueteTitle = await page.title();
  expect(gwassergueteTitle).toBe('Verzeichnis Gewässergüte');

  // Verzeichnis Gewässergüte verlassen
  await page.click(await page.$('#d-nav-tree-node_ROOT-Gewässergüte_firstContent .d-nav-tree-node--text'));

  // Hauptbereich wiederholen
  await page.click(await page.$('#d-nav-tree-node_ROOT-Gewässergüte_firstContent .d-nav-tree-node--text'));

  // Hauptbereich verlassen
  await page.click(await page.$('#d-nav-tree-node_ROOT-Gew