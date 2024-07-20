import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Add code to retrieve the link for "Messstellenkarte"
  const messstellenkarteLink = await page.evaluate(() => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
      if (link.textContent.includes('Messstellenkarte')) {
        return link.href;
      }
    }
    return null;
  });

  // Add code to navigate to the Messstellenkarte link
  if (messstellenkarteLink) {
    await page.goto(messstellenkarteLink);
  }
});