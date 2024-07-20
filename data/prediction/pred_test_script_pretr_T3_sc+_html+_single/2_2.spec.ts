import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.click('#navigationTrigger');
  await page.click('#workbook-create');
  await page.click('#Automobile');
  await page.click('#General');
  await page.click('#Geobasis');
  await page.click('#Gewässer');
  await page.click('#Ladesaeulen');
  await page.click('#Personal');
  await page.click('#Self-Service Repository');
  await page.click('#Tutorial');

  // Additional actions
  await page.click('#skip-to-navigator');
  await page.click('#skip-to-content');
  await page.click('#home');
  await page.click('#karta');

  // Locators
  const select2SearchField = '#select2-search__field';
  const links = {
    tutorial: '#d-nav-tree-node_ROOT-Tutorial_firstContent',
    gewaesser: '#d-nav-tree-node_ROOT-Gewaesser_firstContent',
    automobile: '#d-nav-tree-node_ROOT-Automobile_firstContent',
    ergaenzendeGeodaten: '#d-nav-tree-node--main d-hover-context',
    zentraleDienste: '#d-nav-tree-node_ROOT-Zentrale-Dienste_firstContent',
    meineArbeitsmappen: '#d-nav-tree-node--main d-hover-context',
    zugangsdaten: '#d-nav-tree-node--text ellipsis',
    disyCadenza: '#disy-cadenza',
    ueberDisy: '#userSpecificLink ellipsis hidden-xs',
  };

  // Screenshot
  await page.screenshot({ path: 'cadenza-ui-test.png' });
});