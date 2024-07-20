import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Text under static view', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  await page.getByRole('link', { name: 'Messstellen-Monitoring' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();

  // Find the "Text" button and click it
  const textButton = await page.locator('#LzcbyGCwKvvZZt9uugvRW');
  await textButton.click();

  // Wait for the page to update
  await page.waitForTimeout(1000);

  // Verify that the "Text" button has changed to "Text bearbeiten"
  const editedTextButton = await page.locator('#LzcbyGCwKvvZZt9uugvRW');
  expect(editedTextButton.text()).toBe('Text bearbeiten');
});