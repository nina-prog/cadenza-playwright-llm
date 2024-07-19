import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Öffne das Arbeitsblatts "Häufigkeit der Messungen" über die Navigatorleiste', async ({ page }) => {
  // Precondition:
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByPlaceholder(' ').press('Enter');
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();

  // Test:
  await page.click('[data-testid="navigator-menu"]');
  await page.waitForSelector('[data-testid="worksheet-title"]');

  // Assert:
  const worksheetTitle = await page.locator('[data-testid="worksheet-title"]');
  expect(worksheetTitle.text()).toBe('Häufigkeit der Messungen');

  // Screenshot:
  await page.screenshot({ path: 'worksheet-title.png' });
});