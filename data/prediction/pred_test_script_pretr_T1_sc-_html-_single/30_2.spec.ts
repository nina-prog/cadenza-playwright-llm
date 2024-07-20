import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Öffne die Karten-Sicht "Messstellenkarte" über die Werkzeugliste der Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#toolbar-menu');
  await page.click('#toolbar-menu li:nth-child(2)');
  await page.click('#toolbar-menu li:nth-child(2) a');
  await page.click('#toolbar-menu li:nth-child(3)');
  await page.click('#toolbar-menu li:nth-child(3) a');
  await page.click('#toolbar-menu li:nth-child(4)');
  await page.click('#toolbar-menu li:nth-child(4) a');
  await page.click('#toolbar-menu li:nth-child(5)');
  await page.click('#toolbar-menu li:nth-child(5) a');
  await page.click('#toolbar-menu li:nth-child(6)');
  await page.click('#toolbar-menu li:nth-child(6) a');
  await page.click('#toolbar-menu li:nth-child(7)');
  await page.click('#toolbar-menu li:nth-child(7) a');
  await page.click('#toolbar-menu li:nth-child(8)');
  await page.click('#toolbar-menu li:nth-child(8) a');
  await page.click('#toolbar-menu li:nth-child(9)');
  await page.click('#toolbar-menu li:nth-child(9) a');
  await page.click('#toolbar-menu li:nth-child(10)');
  await page.click('#toolbar-menu li:nth-child(10) a');
  await page.click('#toolbar-menu li:nth-child(11)');
  await page.click('#toolbar-menu li:nth-child(11)