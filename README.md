# Playwright Test Automation Project

This project demonstrates the setup and use of Playwright for writing automated browser tests in JavaScript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 14 or later)
- npm or yarn installed

## Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/angelinaturchyn/playwright-test-automation
    cd playwright-test-automation
    ```

2. **Install dependencies:**

    Using npm:

    ```sh
    npm install
    ```

    Using yarn:

    ```sh
    yarn install
    ```

3. **Configuration:**

    The `playwright.config.js` file contains the configuration for Playwright. It is pre-configured to run tests with Playwright.

## Writing Tests

Tests are written in JavaScript and placed in the `./tests` directory.

### Sample Test File

Create a file `example.test.js` in the `./tests` directory:

```javascript
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.google.com');
  const searchInput = await page.locator('input[name="q"]');
  await searchInput.fill('Playwright');
  await searchInput.press('Enter');
  const results = await page.locator('#search');
  await expect(results).toContainText('Playwright');
});
```

### Running Tests

To execute the tests, use the following command:

``` npx playwright test ```


### Project Structure


```
├── tests
│   └── example.test.js
├── playwright.config.js
├── package.json
└── README.md

```
