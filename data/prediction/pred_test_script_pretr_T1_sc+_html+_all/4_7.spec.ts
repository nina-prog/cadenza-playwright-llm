import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[name="login"]');
  await page.click('a[href="#uebersicht"]');
  await page.click('button[name="test"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.click('button[name="uebersicht"]');
  await page.