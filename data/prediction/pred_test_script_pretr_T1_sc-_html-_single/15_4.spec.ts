import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Arbeitsblatt duplizieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByRole('button', { name: 'Übersicht' }).click();

  // Duplizieren Arbeitsblatt
  await page.click('[data-testid="duplizieren-button"]');

  // Überprüfen, dass Arbeitsblatt erfolgreich dupliziert wurde
  await page.waitForSelector('[data-testid="erfolgreich-dupliziert"]');
});