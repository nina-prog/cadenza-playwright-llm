import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Geben Name des Arbeitsblatts als "Test" und Klicke auf "Hinzufügen"', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Finden des Elements mit dem Label "Anmelden"
  const loginButton = await page.locator('#login-button');

  // Klicken auf das Element mit dem Label "Anmelden"
  await loginButton.click();

  // Finden des Elements mit dem Platzhalter "Benutzername *"
  const usernameInput = await page.locator('#username-input');

  // Finden des Elements mit dem Platzhalter " "
  const usernamePlaceholder = await page.locator('#username-placeholder');

  // Finden des Elements mit dem Namen "Benutzername"
  const usernameLabel = await page.locator('#username-label');

  // Finden des Elements mit dem Text "Verzeichnis Gewässergüte"
  const directoryTitle = await page.locator('#directory-title');

  // Finden des Elements mit dem Text "Anleitung"
  const guideTitle = await page.locator('#guide-title');

  // Finden des Elements mit dem Text "Hinzufügen"
  const addButton = await page.locator('#add-button');

  // Finden des Elements mit dem Text "Test"
  const testTitle = await page.locator('#test-title');

  // Finden des Elements mit dem Text "Test"
  const testButton = await page.locator('#test-button');

  // Finden des Elements mit dem Text "Test"
  const testTitle2 = await page.locator('#test-title-2');

  // Finden des Elements mit dem Text "Test"
  const testButton2 = await page.locator('#test-button-2');

  // Finden des Elements mit dem Text "Test"
  const testTitle3 = await page.locator('#