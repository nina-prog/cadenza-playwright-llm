import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="designer-icon"]');
  await page.click('[data-testid="close-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.click('[data-testid="add