import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test_script', // Directory containing your test files
  use: {
    headless: true,
    screenshot: 'only-on-failure',
  },
  retries: 1,
});