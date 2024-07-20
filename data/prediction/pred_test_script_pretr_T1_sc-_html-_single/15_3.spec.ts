import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="toolbar-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('[data-testid="workspace-menu-item"]');
  await page.click('