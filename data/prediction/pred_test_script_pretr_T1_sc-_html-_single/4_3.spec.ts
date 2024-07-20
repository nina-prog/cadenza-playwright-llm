import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Informationen zur Arbeitsmappe', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="nav-link"]');
  await page.click('[data-testid="show-information-button"]');
  await page.waitForSelector('[data-testid="information-modal"]');
  await page.click('[data-testid="close-button"]');
  await page.waitForSelector('[data-testid="information-modal"]');
  await page.click('[data-testid="information-modal"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.click('[data-testid="information-content"]');
  await page.waitForSelector('[data-testid="information-content"]');
  await page.