test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByPlaceholder(' ').fill('Admin');
  await page.getByRole('button', { name: 'Mehr' }).click();
  await page.getByRole('menuitem', { name: 'Exportieren' }).click();
  await page.getByRole('menuitem', { name: 'Bericht (*.pdf) …' }).click();
});