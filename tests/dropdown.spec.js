const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto('https:/foxtrotco.com');
  await expect(page).toHaveURL('https:/foxtrotco.com');
});

test.only('Dropdown State', async ({ page }) => {
  
  await expect(page).toHaveTitle('Foxtrot');
  
  await page.click('[data-testid="justBrowseLink"]')
  await expect(page.locator('[class*="styled__MenuListItem"]').first()).toBeVisible()
  await page.locator('[class*="styled__MenuListItem"]').first().click()
  await page.locator('[class*="ButtonContentContainer"]').click()
  await page.locator('[class*="ToggleButton"]:nth-of-type(2)').click()
  const dropdown = page.locator('select[class*="RegionSelector"]')
  await dropdown.click()
  await dropdown.selectOption('4')
  await page.waitForTimeout(2000)
  const region = page.locator('[class*="styled__AddressList"]').first()
  await page.waitForTimeout(2000)
  await region.click()

});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

