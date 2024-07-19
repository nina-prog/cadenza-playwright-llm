import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition
const precondition = `
import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
});
`;

// Test
test('Tutorial: Arbeitsmappen Einstieg', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#tutorial-link');
  await page.waitForSelector('#tutorial-content');

  const navbar = await page.$('#tutorial-content');
  const navbarItems = await navbar.locator('li');

  await Promise.all(navbarItems.map(async (item) => {
    const itemText = await item.textContent();
    const itemLink = await item.locator('a');
    const itemLinkText = await itemLink.textContent();

    writeFileSync('test-results.txt', `Navbar item: ${itemText}\nLink: ${itemLinkText}\n`);
  }));
});