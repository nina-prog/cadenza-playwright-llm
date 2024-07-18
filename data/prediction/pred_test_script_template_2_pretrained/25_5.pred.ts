test('Importieren', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByLabel('Benutzername *').press('Tab');
  await page.getByPlaceholder('Bitte geben Sie einen Namen').click();
  await page.getByPlaceholder('Bitte geben Sie einen Namen').fill('TestRename');
  await page.getByRole('button', { name: 'Bitte wählen Sie eine Datei' }).click();
  await page.getByLabel('Bitte wählen Sie eine Datei').setInputFiles('Testmappe_Ladesaeulen.zip');
});