import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Übersicht Messstellen' }).click();
  await page.getByLabel('Analysekontext (ALT+⇧+1)').click();
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#gI6fh169hcuvWuZAe1fqp');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#navigationTrigger');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#gI6fh169hcuvWuZAe1fqp');
  await page.click('#interval');
  await page.click('#select2-search__field');
  await page.click('#navigationTrigger');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#gI6