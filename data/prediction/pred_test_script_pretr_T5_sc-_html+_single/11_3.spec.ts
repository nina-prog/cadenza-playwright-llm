import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition code
// ...

// UI Test Description
await page.click('#navigationTrigger');
await page.click('#create-workbook-button');
await page.click('#menuitem_Gewässer');

// Additional code
// ...

// Screenshot
// ...