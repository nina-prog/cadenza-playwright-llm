import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Workspace import test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  // Find the "Arbeitsmappe importieren" button
  const importButton = await page.locator('#navigationTrigger');
  await importButton.click();

  // Find the "Repository neu einlesen ..." button
  const repositoryButton = await page.locator('#RDxYr2vFytOijWjelj7P1');
  await repositoryButton.click();

  // Find the "Zum Navigatorbaum springen" button
  const skipToNavigatorButton = await page.locator('#skip-to-navigator');
  await skipToNavigatorButton.click();

  // Find the "Zum Hauptbereich springen" button
  const skipToContentButton = await page.locator('#skip-to-content');
  await skipToContentButton.click();

  // Find the "Startseite" button
  const homeButton = await page.locator('#home');
  await homeButton.click();

  // Find the "Karte" button
  const mapButton = await page.locator('#map');
  await mapButton.click();

  // Find the "Verzeichnis Tutorial" button
  const tutorialButton = await page.locator('#d-nav-tree-node_ROOT-Tutorial_firstContent');
  await tutorialButton.click();

  // Find the "Verzeichnis Gewässergüte" button
  const waterQualityButton = await page.locator('#d-nav-