import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsmappe exportieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#start');
  await page.waitForSelector('#export-button');
  await page.click('#export-button');
  await page.waitForSelector('#export-success-message');
  await page.click('#export-success-message');
  await page.waitForSelector('#export-progress-bar');
  await page.click('#export-progress-bar');
  await page.waitForSelector('#export-progress-bar .done');
  await page.click('#export-progress-bar .done');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await page.waitForSelector('#export-progress-bar .error');
  await page.click('#export-progress-bar .error');
  await