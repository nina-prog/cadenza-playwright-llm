import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('Skip to navigation');
  await page.click('Skip to content');
  await page.click('Home');
  await page.click('Anmelden');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('Anmelden');
  await page.click('link[title="Testmappe_Ladesaeulen"]');
  await page.click('button[title="Karte"]');
});