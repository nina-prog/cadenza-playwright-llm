import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '../data/prediction/pred_test_script', // Directory containing your test files relative to the config file
  use: {
    headless: true,
    screenshot: 'only-on-failure',
  },
  retries: 1,
});
