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
});

// UI test description actions
test('Click on the Analysekontextsymbol in the toolbar', async ({ page }) => {
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#mCj1IAV0vmDTOAtfERWBG');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#data-load');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#data-load');