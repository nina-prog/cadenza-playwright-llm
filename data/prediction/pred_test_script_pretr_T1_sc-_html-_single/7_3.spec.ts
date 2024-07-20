import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Gewässergüte', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#header-menu a:nth-child(1)');
  await page.click('#header-menu a:nth-child(2)');
  await page.click('#header-menu a:nth-child(3)');
  await page.click('#header-menu a:nth-child(4)');
  await page.click('#header-menu a:nth-child(5)');
  await page.click('#header-menu a:nth-child(6)');
  await page.click('#header-menu a:nth-child(7)');
  await page.click('#header-menu a:nth-child(8)');
  await page.click('#header-menu a:nth-child(9)');
  await page.click('#header-menu a:nth-child(10)');
  await page.click('#header-menu a:nth-child(11)');
  await page.click('#header-menu a:nth-child(12)');
  await page.click('#header-menu a:nth-child(13)');
  await page.click('#header-menu a:nth-child(14)');
  await page.click('#header-menu a:nth-child(15)');
  await page.click('#header-menu a:nth-child(16)');
  await page.click('#header-menu a:nth-child(17)');
  await page.click('#header-menu a:nth-child(18)');
  await page.click('#header-menu a:nth-child(19)');
  await page.click('#header-menu a:nth-child(20)');
  await page.click('#header-menu a:nth-child(21)');
  await page.click('#header-menu a:nth-child(22)');
  await page.click('#header-menu a: