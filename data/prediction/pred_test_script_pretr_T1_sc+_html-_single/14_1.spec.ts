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
  await page.waitForSelector('#cadenz-header-menu-item-1');
  await page.click('#cadenz-header-menu-item-1');
  await page.waitForSelector('#cadenz-header-menu-item-2');
  await page.click('#cadenz-header-menu-item-2');
  await page.waitForSelector('#cadenz-header-menu-item-3');
  await page.click('#cadenz-header-menu-item-3');
  await page.waitForSelector('#cadenz-header-menu-item-4');
  await page.click('#cadenz-header-menu-item-4');
  await page.waitForSelector('#cadenz-header-menu-item-5');
  await page.click('#cadenz-header-menu-item-5');
  await page.waitForSelector('#cadenz-header-menu-item-6');
  await page.click('#cadenz-header-menu-item-6');
  await page.waitForSelector('#cadenz-header-menu-item-7');
  await page.click('#cadenz-header-menu-item-7');
  await page.waitForSelector('#cadenz-header-menu-item-8');
  await page.click('#cadenz-header-menu-item-8');
  await page.waitForSelector('#cadenz