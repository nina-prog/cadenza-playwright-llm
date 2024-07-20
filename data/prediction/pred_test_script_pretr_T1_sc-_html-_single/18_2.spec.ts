import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Neue Sicht', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#toolbar-menu');
  await page.click('[data-testid="new-view"]');
});