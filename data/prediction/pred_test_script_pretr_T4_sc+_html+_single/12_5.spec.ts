import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('a[data-testid="skip-to-navigator"]');
  await page.click('a[data-testid="skip-to-navigator"]');
  await page.waitForSelector('a[data-testid="skip-to-content"]');
  await page.click('a[data-testid="skip-to-content"]');
  await page.waitForSelector('div[data-testid="d-file-input--input"]');
  await page.fill('div[data-testid="d-file-input--input"]', 'Testmappe_Ladesaeulen.zip');
  await page.waitForSelector('div[data-testid="d-nav-tree-node--text"]');
  await page.click('div[data-testid="d-nav-tree-node--text"]');
  await page.waitForSelector('div[data-testid="d-nav-tree-node--text"]');
  await page.click('div[data-testid="d-nav-tree-node--text"]');
  await page.waitForSelector('div[data-testid="d-nav-tree-node--text"]');
  await page.click('div[data-testid="d-nav-tree-node--text"]');
  await page.waitForSelector('div[data-testid="d-nav-tree-node--text"]');
  await page.click('div[data-testid="d-nav-tree-node--text"]');
  await page.waitForSelector('div[data-testid="d-nav-tree-node--text"]');
  await page.click('div[data-testid="d-nav-