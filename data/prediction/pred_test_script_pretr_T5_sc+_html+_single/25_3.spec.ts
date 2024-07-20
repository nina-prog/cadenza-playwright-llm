import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await page.waitForSelector('div.startpage-section-navigation-item');
  const links = await page.evaluate(() => {
    const links = document.querySelectorAll('a.button-icon');
    return Array.from(links).map((link) => link.textContent);
  });
  expect(links).toContain('Zugangsdaten');
  await page.click('a.button-icon.d-file-input--input');
  await page.waitForSelector('input[type="file"]');
  await page.fill('input[type="file"]', 'path/to/file.zip');
  await page.click('button[type="submit"]');
  await page.waitForSelector('div.startpage-section-navigation-item');
  const selectedLink = await page.evaluate(() => {
    const selectedLink = document.querySelector('a.startpage-section-navigation-item');
    return selectedLink.textContent;
  });
  expect(selectedLink).toContain('Arbeitsmappe importieren');
});