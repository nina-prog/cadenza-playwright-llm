import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Bericht Exportieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on Anmelden
  await page.getByRole('link', { name: 'Anmelden' }).click();

  // Enter Admin as username
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Click on Suchen nach...
  await page.getByPlaceholder('Suchen nach …').click();
  await page.getByPlaceholder('Suchen nach …').fill('Messstellenkarte');
  await page.getByPlaceholder('Suchen nach …').press('Enter');

  // Click on Karte Messstellenkarte
  await page.getByRole('link', { name: 'Karte Messstellenkarte' }).click();

  // Click on Mehr
  await page.getByRole('menuitem', { name: 'Exportieren' }).click();

  // Click on Bericht (*.pdf) ...
  await page.getByRole('menuitem', { name: 'Bericht (*.pdf) ...' }).click();

  // Expect the screenshot to be displayed
  await expect(page).toHaveScreenshot('ui-test-screenshot.png');
});