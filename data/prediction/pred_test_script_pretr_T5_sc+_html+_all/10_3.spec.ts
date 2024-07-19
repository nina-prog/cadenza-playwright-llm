import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="designer-icon"]');
  await page.waitForSelector('[data-testid="add-view-button"]');
  await page.click('[data-testid="add-view-button"]');
  await page.waitForSelector('[data-testid="ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ"]');
  await page.click('[data-testid="ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ"]');
  await page.waitForSelector('[data-testid="new-view-button"]');
  await page.click('[data-testid="new-view-button"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data