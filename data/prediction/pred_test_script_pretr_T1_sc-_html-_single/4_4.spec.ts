import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Neues Arbeitsblatt', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Anmelden');
  await page.click('Benutzername *');
  await page.fill('Admin');
  await page.press('Tab');
  await page.click('Benutzername *');
  await page.fill('Admin');
  await page.press('Tab');
  await page.click('Anmelden');
  await page.click('Übersicht Messstellen');
  await page.click('Informationen zur Arbeitsmappe');
  await page.click('Neues Arbeitsblatt');
});