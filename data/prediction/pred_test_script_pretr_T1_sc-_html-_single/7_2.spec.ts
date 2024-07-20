import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Öffne den Link "Messstellen-Monitoring"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('[data-testid="link-messstellen-monitoring"]');
});