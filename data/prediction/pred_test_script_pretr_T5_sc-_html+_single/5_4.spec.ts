// Import the necessary modules
import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Define the precondition code
async function precondition() {
  // Set up the initial state
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByPlaceholder(' ').press('Enter');
  await page.getByText('Verzeichnis Gewässergüte', { exact: true }).click();
  const parentElement = await page.getByText('Arbeitsmappe Übersicht Messstellen').locator('..');
  await parentElement.locator('.d-icon.d-icon-bold.status-icon').click();
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();
  await page.getByText('Anzahl der Messungen pro Jahr').click();
}

// Define the test code
async function test() {
  // Call the precondition code to set up the initial state
  await precondition();

  // Add code to the precondition based on the UI Test Description
  await page.getByRole('link', { name: 'Dashboard Häufigkeit der' }).click();

  // Add not more than 3 lines of code
  await page.waitForSelector('.d-icon.d-icon-bold.status-icon');
  await page.click('.d-icon.d-icon-bold.status-icon');
  await page.waitForSelector('.d-icon.d-icon-bold.status-icon');
  await page.click('.d-icon.d-icon-bold.status-icon');

  // Take a screenshot to understand the context of the test
  await page.screenshot({ path: 'test