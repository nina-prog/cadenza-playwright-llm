import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#login-button');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('#login-button');
  await page.waitForSelector('#cadenz-header');
  await page.click('#cadenz-header');
  await page.waitForSelector('#cadenz-header-menu');
  await page.click('#cadenz-header-menu');
  await page.waitForSelector('#cadenz-header-menu-item-reports');
  await page.click('#cadenz-header-menu-item-reports');
  await page.waitForSelector('#cadenz-reports-tab');
  await page.click('#cadenz-reports-tab');
  await page.waitForSelector('#cadenz-reports-tab-content');
  await page.click('#cadenz-reports-tab-content');
  await page.waitForSelector('#cadenz-reports-tab-content-chart');
  await page.click('#cadenz-reports-tab-content-chart');
  await page.waitForSelector('#cadenz-chart');
  await page.click('#cadenz-chart');
  await page.waitForSelector('#cadenz-chart-legend');
  await page.click('#cadenz-chart-legend');
  await page.waitForSelector('#cadenz-chart-data');
  await page.click('#cadenz-chart-data');
  await page.waitForSelector('#cadenz-chart-data-point');
  await page.click('#cadenz-chart-data-point');
  await page.waitForSelector('#cadenz-chart-data-point-label');
  await page.click('#cadenz-chart-data-point-label');
  await page.waitForSelector