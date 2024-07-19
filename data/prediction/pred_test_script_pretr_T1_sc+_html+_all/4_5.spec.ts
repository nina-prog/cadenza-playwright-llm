import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('a[href="#/uebersicht-messstellen"]');
  await page.click('a[href="#/uebersicht-messstellen"]');
  await page.waitForSelector('button[title="Informationen zur Arbeitsmappe"]');
  await page.click('button[title="Informationen zur Arbeitsmappe"]');
  await page.waitForSelector('button[title="Neues Arbeitsblatt"]');
  await page.click('button[title="Neues Arbeitsblatt"]');
});