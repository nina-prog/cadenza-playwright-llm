import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// ...

test('Workspace "Übersicht Messstellen" in folder "Gewässergüte"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to navigate to the desired folder and open the workspace
  await page.click('#RDxYr2vFytOijWjelj7P1');
  await page.waitForSelector('#workbook-create');

  // Add code to perform the desired actions in the workspace
  // ...

  // Add code to take a screenshot of the test result
  await page.screenshot({ path: 'test-result.png' });
});