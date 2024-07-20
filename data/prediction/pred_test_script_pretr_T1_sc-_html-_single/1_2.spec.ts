import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Öffnen der Tabellen-Sicht "Messstellenliste" über die Werkzeugliste der Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#toolbar-menu');
  await page.click('#toolbar-menu li:nth-child(2)');
  await page.click('#toolbar-menu li:nth-child(3)');
  await page.click('#toolbar-menu li:nth-child(4)');
  await page.click('#toolbar-menu li:nth-child(5)');
  await page.click('#toolbar-menu li:nth-child(6)');
  await page.click('#toolbar-menu li:nth-child(7)');
  await page.click('#toolbar-menu li:nth-child(8)');
  await page.click('#toolbar-menu li:nth-child(9)');
  await page.click('#toolbar-menu li:nth-child(10)');
  await page.click('#toolbar-menu li:nth-child(11)');
  await page.click('#toolbar-menu li:nth-child(12)');
  await page.click('#toolbar-menu li:nth-child(13)');
  await page.click('#toolbar-menu li:nth-child(14)');
  await page.click('#toolbar-menu li:nth-child(15)');
  await page.click('#toolbar-menu li:nth-child(16)');
  await page.click('#toolbar-menu li:nth-child(17)');
  await page.click('#toolbar-menu li:nth-child(18)');
  await page.click('#toolbar-menu li:nth-child(19)');
  await page.click('#toolbar-menu li:nth-child(20)');
  await page.click('#toolbar-menu li:nth-child(21)');