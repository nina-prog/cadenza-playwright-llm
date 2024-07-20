import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('cadenz-test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('link[name="Anmelden"]');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.press('Tab');
  await page.fill('input[name="Benutzername"]', 'Admin');
  await page.click('button[name="Anmelden"]');

  // Additional actions
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click('i[title="Zurück"]');
  await page.click