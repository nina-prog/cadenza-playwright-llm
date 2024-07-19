import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Duplizieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Fill in the username
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');

  // Click on the "Duplizieren" button
  await page.getByRole('button', { name: 'Duplizieren' }).click();

  // Wait for the dialog to appear
  await page.waitForSelector('.d-icon.d-icon-bold.status-icon');

  // Click on the "OK" button
  await page.getByRole('button', { name: 'OK' }).click();

  // Wait for the dialog to close
  await page.waitForSelector('.d-icon.d-icon-bold.status-icon');

  // Click on the "Dashboard Häufigkeit der" link
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();

  // Click on the "Anzahl der Messungen pro Jahr" link
  await page.getByRole('link', { name: 'Anzahl der Messungen pro Jahr' }).click();

  // Click on the "Mehr ..." button
  await page.getByRole('button', { name: 'Mehr ...' }).click();

  // Wait for the dialog to appear
  await page.waitForSelector('[data-testid="popup-window"]');

  // Fill in the dialog with the desired text
  await page.fill('[data-testid="popup-window"]', 'Duplizieren');

  // Click on the "OK" button
  await page.getByRole('button', { name: 'OK' }).click();

  //