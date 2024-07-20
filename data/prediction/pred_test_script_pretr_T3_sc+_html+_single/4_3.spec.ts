import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#informationen-zur-arbeitsmappe');
  await page.click('#speichern-unter');
  await page.click('#speichern');
  await page.click('#speichern-und-veröffentlichen');
  await page.click('#zugriffseinstellungen');
  await page.click('#neue-sicht');
  await page.click('#mehr');
  await page.fill('input[placeholder="dd.MM.yyyy - dd.MM.yyyy"]', '20.03.2023 - 25.03.2023');
  await page.fill('interval[aria-label="Messwert Start des Wertebereichs"]', '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000