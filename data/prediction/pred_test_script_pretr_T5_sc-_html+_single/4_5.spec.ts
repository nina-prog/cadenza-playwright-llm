import { test, expect } from '@playwright/test';
import { writeFileSync } from 'fs';

// Precondition code
// ...

// UI Test Description
await page.fill('input[name="name"]', 'Test');
await page.click('button[title="Hinzufügen"]');

// Additional code
// ...

// Screenshot
// ...