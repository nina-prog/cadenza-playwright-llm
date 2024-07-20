import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.fill('input[placeholder="dd.MM.yyyy - dd.MM.yyyy"]', '01.01.2023 - 31.12.2023');
  await page.fill('interval[aria-label="Messwert Start des Wertebereichs"]', '10');
  await page.fill('interval[aria-label="Messwert Ende des Wertebereichs"]', '20');
  await page.fill('select2-search__field[placeholder="Suchen ..."]', 'Suche nach Messwerten');
  await page.click('#mCj1IAV0vmDTOAtfERWBG');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#home');
  await page.click('#userSpecificLink.ellipsis.hidden-xs');
  await page.click('#userSpecificLink.ellipsis.hidden-xs');
  await page.click('#userSpecificLink.ellipsis');
});