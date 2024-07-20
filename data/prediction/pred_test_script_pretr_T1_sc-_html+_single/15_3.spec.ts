import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Uebersicht', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByText('Arbeitsmappe Testmappe_Ladesaeulen').hover();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.waitForSelector('#OUlAeK2xXDz9HOUG3fP7k');
  await page.fill('OUlAeK2xXDz9HOUG3fP7k', '01.01.2023');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.fill('ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B', '1');
  await page.waitForSelector('#home');
  await page.click('#home');
  await page.waitForSelector('#OUlAeK2xXDz9HOUG3fP7k');
  await page.fill('OUlAeK2xXDz9HOUG3fP7k', '02.01.2023');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.fill('ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B', '