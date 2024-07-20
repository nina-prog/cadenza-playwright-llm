import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test: Arbeitsmappe importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="_event"]', 'Arbeitsmappe importieren');
  await page.click('button[data-testid="import-button"]');
  await page.waitForSelector('div.modal-content');
  await page.click('div.modal-content button[data-testid="modal-ok-button"]');
  await page.waitForSelector('input[name="name"]');
  await page.fill('input[name="name"]', 'Testmappe_Importierte_Ladesaeulen');
  await page.click('input[name="submit"]');
  await page.waitForSelector('div.modal-content');
  await page.click('div.modal-content button[data-testid="modal-ok-button"]');
  await page.waitForSelector('input[name="name"]');
  await page.fill('input[name="name"]', 'Testmappe_Importierte_Ladesaeulen');
  await page.click('input[name="submit"]');
  await page.waitForSelector('div.modal-content');
  await page.click('div.modal-content button[data-testid="modal-ok-button"]');
  await page.waitForSelector('input[name="name"]');
  await page.fill('input[name="name"]', 'Testmappe_Importierte_Ladesaeulen');
  await page.click('input[name="submit"]');
  await page.waitForSelector('div.modal-content');
  await page.click('div.modal-content button[data-testid="modal-ok-button"]');
  await page.waitForSelector('input[name="name"]');
  await page.fill('input[name="name"]', 'Testmappe_Importierte_Ladesaeulen');
  await page.click('input[name="submit"]');
  await page.waitForSelector('div