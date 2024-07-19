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

  // Gewässergüte-Seite öffnen
  await page.click('#d-nav-tree-node_ROOT-Gewässergüte_firstContent');

  // Screenshot der Gewässergüte-Seite aufnehmen
  await page.screenshot({ path: 'Gewässergüte.png' });
});