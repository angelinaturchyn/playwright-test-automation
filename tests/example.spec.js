const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await expect(page).toHaveURL('https:/foxtrotco.com');
});

test('basic test', async ({ page }) => {
  await expect(page).toHaveTitle('Foxtrot');
  await expect(page.locator('//parent::span//a[@kind="primary"]').first()).toHaveAttribute('href', '/stores')
  await page.click('//parent::span//a[@kind="primary"]')
  await expect(page.locator('text=Our Stores').first()).toBeVisible()
  await page.click('//span[text()="Dallas"]')
});
test('basic test', async ({ page }) => {
  await expect(page).toHaveURL('https:/foxtrotco.com');
  await expect(page).toHaveTitle('Foxtrot');
  await expect(page.locator('//parent::span//a[@kind="primary"]').first()).toHaveAttribute('href', '/stores')
  await page.click('//parent::span//a[@kind="primary"]')
  await expect(page.locator('text=Our Stores').first()).toBeVisible()
  await page.click('//span[text()="Chicago"]')
});