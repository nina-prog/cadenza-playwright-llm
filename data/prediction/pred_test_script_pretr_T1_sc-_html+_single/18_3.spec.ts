import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Säulendiagramm Sight Test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByRole('link', { name: 'Testmappe_Ladesaeulen' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();

  // Säulendiagramm Sight
  const saulendiagrammSight = await page.locator('#Säulendiagramm');
  expect(await saulendiagrammSight.isVisible()).toBe(true);

  // Close Sight
  const closeSight = await page.locator('#close-sight');
  expect(await closeSight.isVisible()).toBe(true);

  // Save and Publish
  const saveAndPublish = await page.locator('#save-and-publish');
  expect(await saveAndPublish.isVisible()).toBe(true);

  // Cancel
  const cancel = await page.locator('#cancel');
  expect(await cancel.isVisible()).toBe(true);

  // Refresh
  const refresh = await page.locator('#refresh');
  expect(await refresh.isVisible()).toBe(true);

  // Save
  const save = await page.locator('#save');
  expect(await save.isVisible()).toBe(true);

  // Aktualisieren
  const aktualisieren = await page.locator('#aktualisieren');
  expect(await aktualisieren