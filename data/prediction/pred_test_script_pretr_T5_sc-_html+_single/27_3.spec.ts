// Add code to click on the "Mehr" button
await page.click('#ad-hoc-settings-LO8EpTw_Rr6ParizyY3AtQ');

// Add code to click on the "Neue Sicht" button
await page.click('#new-view-button');

// Add code to fill in the username and press enter
await page.fill('input[name="username"]', 'Admin');
await page.press('Enter');

// Add code to click on the "Karte Messstellenkarte" link
await page.click('a[href="http://localhost:8080/cadenza/karte-messstellenkarte"]');