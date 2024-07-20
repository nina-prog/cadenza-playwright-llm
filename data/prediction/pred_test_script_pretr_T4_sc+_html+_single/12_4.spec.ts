import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('a[data-testid="startpage-section-navigation-item"]');
  await page.click('a[data-testid="startpage-section-navigation-item"]');
  await