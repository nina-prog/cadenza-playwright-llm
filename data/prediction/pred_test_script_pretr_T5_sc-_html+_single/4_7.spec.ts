// Use the Simplified HTML Content to retrieve the links from the website
const links = [
  {"text": "Zum Navigatorbaum springen", "id": "skip-to-navigator", "class": "button button-primary"},
  {"text": "Zum Hauptbereich springen", "id": "skip-to-content", "class": "button button-primary"},
  {"text": "Startseite", "id": "home", "class": "button button-icon button-borderless"},
  {"text": "Karte"},
  {"text": "disy Cadenza v9.4.71", "class": "userSpecificLink ellipsis hidden-xs"},
  {"text": "© Disy Informationssysteme GmbH", "class": "userSpecificLink ellipsis hidden-xs"},
  {"text": "Über Disy", "class": "userSpecificLink ellipsis"}
];

// Use the precondition code to set up the initial state
// ...

// Use the UI Test Description to add code to the precondition
await page.click('#home');

// Add not more than 3 lines of code
await page.click('#skip-to-navigator');
await page.click('#skip-to-content');
await page.click('#home');

// Use the screenshot to understand the context of the test
// ...