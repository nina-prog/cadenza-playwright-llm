import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Cadenz Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#cadenz-header-link');
  await page.click('#cadenz-login-button');
  await page.click('#cadenz-username-input');
  await page.fill('#cadenz-username-input', 'Admin');
  await page.click('#cadenz-password-input');
  await page.fill('#cadenz-password-input', 'password');
  await page.click('#cadenz-login-button');
});