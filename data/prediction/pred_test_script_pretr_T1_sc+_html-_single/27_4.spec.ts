import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Exportieren - Bericht (*.pdf)', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.fill('Benutzername *', 'Admin');
  await page.fill('Benutzername *', 'Admin');
  await page.press('Tab');
  await page.fill('Suchen nach …', 'Messstellenkarte');
  await page.press('Enter');
  await page.click('Karte Messstellenkarte');
  await page.click('Mehr');
});