test('Duplizieren', async ({ page }) => {
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#JHWFEtVwIC8mYo_6yBGz7');
  await page.click('#navigationTrigger');
  await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');
  await page.click('#JHWFEtVwIC8mYo_6yBGz7');
  await page.click('#navigationTrigger');
});