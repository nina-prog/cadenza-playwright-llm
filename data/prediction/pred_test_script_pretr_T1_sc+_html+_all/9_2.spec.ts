import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.waitForSelector('[data-testid="startpage-section-navigation-item"]');
  await page.click('[data-testid="startpage-section-navigation-item"]');
  await page.waitForSelector('[data-testid="userSpecificLink"]');
  await page.click('[data-testid="userSpecificLink"]');
});