import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsblatt "Messstellenliste"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#main-menu');
  await page.click('#sub-menu-1');
  await page.click('#sub-menu-2');
  await page.click('#sub-menu-3');
  await page.click('#sub-menu-4');
  await page.click('#sub-menu-5');
  await page.click('#sub-menu-6');
  await page.click('#sub-menu-7');
  await page.click('#sub-menu-8');
  await page.click('#sub-menu-9');
  await page.click('#sub-menu-10');
  await page.click('#sub-menu-11');
  await page.click('#sub-menu-12');
  await page.click('#sub-menu-13');
  await page.click('#sub-menu-14');
  await page.click('#sub-menu-15');
  await page.click('#sub-menu-16');
  await page.click('#sub-menu-17');
  await page.click('#sub-menu-18');
  await page.click('#sub-menu-19');
  await page.click('#sub-menu-20');
  await page.click('#sub-menu-21');
  await page.click('#sub-menu-22');
  await page.click('#sub-menu-23');
  await page.click('#sub-menu-24');
  await page.click('#sub-menu-25');
  await page.click('#sub-menu-26');
  await page.click('#sub-menu-27');
  await page.click('#sub-menu-28');
  await page.click('#sub-menu-29');
  await page.click('#sub-menu-30');
  await page.click('#sub-menu-31');
  await page.