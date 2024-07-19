import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('button[title="Duplizieren"]');
  await page.click('button[title="Duplizieren"]');
  await page.waitForSelector('button[title="Zum Hauptbereich springen"]');
  await page.click('button[title="Zum Hauptbereich springen"]');
  await page.waitForSelector('button[title="Zum Navigatorbaum springen"]');
  await page.click('button[title="Zum Navigatorbaum springen"]');
  await page.waitForSelector('button[title="Startseite"]');
  await page.click('button[title="Startseite"]');
  await page.waitForSelector('button[title="Arbeitsmappe Testmappe_Ladesaeulen"]');
  await page.click('button[title="Arbeitsmappe Testmappe_Ladesaeulen"]');
  await page.waitForSelector('button[title="Übersicht"]');
  await page.click('button[title="Übersicht"]');
  await page.waitForSelector('button[title="Arbeitsblatt duplizieren"]');
  await page.click('button[title="Arbeitsblatt duplizieren"]');
});