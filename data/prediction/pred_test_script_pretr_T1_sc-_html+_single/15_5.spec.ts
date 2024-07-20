import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[name="login"]');
  await page.waitForSelector('a[href="/#/uebersicht"]');
  await page.click('a[href="/#/uebersicht"]');
  await page.waitForSelector('button[title="Speichern unter ..."]');
  await page.click('button[title="Speichern unter ..."]');
  await page.waitForSelector('button[title="Speichern"]');
  await page.click('button[title="Speichern"]');
  await page.waitForSelector('button[title="Speichern und veröffentlichen"]');
  await page.click('button[title="Speichern und veröffentlichen"]');
  await page.waitForSelector('button[title="Zugriffseinstellungen"]');
  await page.click('button[title="Zugriffseinstellungen"]');
  await page.waitForSelector('button[title="Neue Sicht"]');
  await page.click('button[title="Neue Sicht"]');
  await page.waitForSelector('button[title="Mehr"]');
  await page.click('button[title="Mehr"]');
  await page.waitForSelector('a[href="/#/ad-hoc-settings"]');
  await page.click('a[href="/#/ad-hoc-settings"]');
  await page.waitForSelector('button[title="Abbrechen"]');
  await page.click('button[title="Abbrechen"]');
  await page.waitForSelector('button[title="Aktualisieren"]');
  await page.click('button[title="Aktualisieren"]');
  await page.waitForSelector('button[title="Abbrechen"]');
  await page.