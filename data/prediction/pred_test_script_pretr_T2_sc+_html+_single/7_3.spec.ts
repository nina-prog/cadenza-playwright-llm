import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Messstellen-Monitoring' }).click();
  await page.click('#ad-hoc-settings-2OMVFH-pSWi4NJK_ue7gAA');
  await page.click('#navigationTrigger');
  await page.click('#hvrJtnyWAK1fX8Fs_1T6y');
  await page.click('#ad-hoc-settings-2OMVFH-pSWi4NJK_ue7gAA');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#informationen-zur-arbeitsmappe');
  await page.click('#speichern-unter');
  await page.click('#speichern');
  await page.click('#speichern-und-uebergeben');
  await page.click('#zuegangseinstellungen');
  await page.click('#neue-sicht');
  await page.click('#mehr');
  await page.click('#data-laden');
  await page.click('#weitere-daten-hinzufuegen');
  await page.click('#interval-form-control');
  await page.click('#interval-form-control');
  await page.click('#select2-search__field');
  await page.click('#userSpecificLink-ellipsis-hidden-xs');