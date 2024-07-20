import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test: Arbeitsmappe "Testmappe_Ladesaeulen"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to navigate to the Arbeitsmappe "Testmappe_Ladesaeulen"
  // Use the links from the Simplified HTML Content to retrieve the navigation buttons
  const navigationButtons = [
    {"id": "navigationTrigger", "class": "button button-icon button-borderless"},
    {"id": "workbook-create", "class": "button workbook-create button-icon"},
    {"id": "RDxYr2vFytOijWjelj7P1", "class": "button navigation-menu button-icon"}
  ];
  await Promise.all(
    navigationButtons.map(async (button) => {
      const buttonElement = await page.$(button.id);
      await buttonElement.click();
    })
  );

  // Add code to check if the Arbeitsmappe "Testmappe_Ladesaeulen" is opened
  // Use the selectors from the Simplified HTML Content to retrieve the Arbeitsmappe title
  const workbookTitle = await page.$('.workbook-title');
  const expectedTitle = 'Testmappe_Ladesaeulen';
  expect(workbookTitle.textContent).toBe(expectedTitle);

  // Add code to take a screenshot of the opened Arbeitsmappe
  // Use the Playwright API to capture the screenshot
  const screenshot = await page.screenshot({ path: 'testmappe