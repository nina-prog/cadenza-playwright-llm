import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('UI Test: Analysekontext Symbol', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');

  // Click on the Analysekontext symbol in the toolbar
  await page.click('#analysekontext-symbol');

  // Click on the link to the Überseite Messstellen
  await page.click('http://localhost:8080/cadenza/messstellen');

  // Click on the link to the Überseite Gewässergüte
  await page.click('http://localhost:8080/cadenza/gewasserguete');

  // Click on the link to the Überseite Analysekontext
  await page.click('http://localhost:8080/cadenza/analysekontext');

  // Click on the link to the Überseite Gewässergüte
  await page.click('http://localhost:8080/cadenza/gewasserguete');

  // Click on the link to the Überseite Messstellen
  await page.click('http://localhost:8080/cadenza/messstellen');

  // Click on the link to the Überseite Analysekontext
  await page.click('http://localhost:8080/cadenza/analysekontext');

  // Click on the link to the Überseite Gewässergüte
  await page.click('http://localhost:8080/cadenza/gewasserguete');

  // Click on the link to the Überseite Messstellen
  await page.click('http://localhost:8080/cadenza/messstellen');

  // Click on the link to the Überseite Gewässergüte
  await page.click('http://localhost:8080/cadenza/gewasserguete');

  // Click on the link to the Überseite Analysekontext
  await page.click('http://localhost:8080/cadenza/analysekontext');

  //