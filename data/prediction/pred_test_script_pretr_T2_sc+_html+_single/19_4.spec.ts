test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/cadenza/');
  await page.getByRole('link', { name: 'Anmelden' }).click();
  await page.getByLabel('Benutzername *').click();
  await page.getByLabel('Benutzername *').fill('Admin');
  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByTestId('workbook-create-new-view-button').click();
  await page.waitForSelector('#hzYChLRQ185hd80LT4dRa');
  await page.click('#hzYChLRQ185hd80LT4dRa');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.waitForSelector('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.click('#ad-hoc-settings-HfbSBuHpbaZGzh4zFs8B');
  await page.