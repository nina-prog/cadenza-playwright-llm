import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('Test: Importieren von Arbeitsmappen', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByLabel('Mehr …', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Arbeitsmappe importieren' }).click();

  // Wait for the file input to be visible
  await page.waitForSelector('#q3KXw0uzfEZKGOJhxPoEy');

  // Click on the "Bitte wählen Sie eine Datei aus." label
  await page.click('#q3KXw0uzfEZKGOJhxPoEy');

  // Wait for the "Testmappe_Ladesaeulen" ZIP-Datei to be selected
  await page.waitForSelector('#flAN6weIIZjMw_iJOZNRO');

  // Fill the file input with the path to the ZIP-Datei
  await page.fill('#flAN6weIIZjMw_iJOZNRO', 'http://localhost/Testmappe_Ladesaeulen.zip');

  // Click on the "Importieren" button
  await page.click('#navigationTrigger');

  // Wait for the import to finish
  await page.waitForSelector('#home');
});