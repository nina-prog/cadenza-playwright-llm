import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to retrieve the link for "Messstellenkarte"
  const link = await page.evaluate(() => {
    const searchInput = document.querySelector('input[placeholder=""]');
    searchInput.value = 'Messstellenkarte';
    const searchButton = document.querySelector('button[aria-label="Suchen"]');
    searchButton.click();
    return document.querySelector('a[data-testid="d-nav-tree-node_ROOT-Messstellenkarte_firstContent"]');
  });

  // Add code to navigate to the "Messstellenkarte" link
  await page.click(link);

  // Add code to perform any additional actions on the "Messstellenkarte" page
  // ...

  // Add code to close the browser
  await page.close();
});