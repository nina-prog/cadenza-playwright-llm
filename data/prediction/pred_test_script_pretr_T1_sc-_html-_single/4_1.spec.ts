import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
test('UI Test: Gewässergüte', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="sidebar"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[data-testid="menu-item"]');
  await page.click('[