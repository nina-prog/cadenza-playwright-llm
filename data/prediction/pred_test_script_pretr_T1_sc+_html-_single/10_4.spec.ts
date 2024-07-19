import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Klicke auf X im Designer', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitForSelector('X');
  await page.click('X');
  await page.waitForSelector('Designer (ALT+⇧+2)');
  await page.click('Designer (ALT+⇧+2)');
  await page.waitFor