import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// ...

test('test', async ({ page }) => {
  // ...
  await page.getByRole('link', { name: 'Anmelden' }).click();
  // ...
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  // ...
});

// ...

test('test', async ({ page }) => {
  // ...
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  // ...
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  const page1 = await page1Promise;
  // ...
});

// ...

test('test', async ({ page }) => {
  // ...
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  // ...
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  const page1 = await page1Promise;
  // ...
});

// ...

test('test', async ({ page }) => {
  // ...
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  // ...
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  const page1 = await page1Promise;
  // ...
});

// ...

test('test', async ({ page }) => {
  // ...
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  // ...
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Messstellenkarte' }).click();
  const page1 = await