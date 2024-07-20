// Inputs
const input1 = await page.$('#MjJiHbk8AHQdIWqV-KVMy');
const input2 = await page.$('.select2-search__field');

// Links
const link1 = await page.$('#home');
const link2 = await page.$('#orHWJbE3vWPXhxt1mZQjK');
const link3 = await page.$('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
const link4 = await page.$('#skip-to-navigator');
const link5 = await page.$('#skip-to-content');
const link6 = await page.$('#disy Cadenza v9.4.71');
const link7 = await page.$('#userSpecificLink');

// Screenshot
await page.screenshot({ path: 'test-screenshot.png' });