const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https:/foxtrotco.com');
  await expect(page).toHaveURL('https:/foxtrotco.com');
  await expect(page).toHaveTitle('Foxtrot');
  await expect(page.locator('//parent::span//a[@kind="primary"]').first()).toHaveAttribute('href', '/stores')
  await page.click('//parent::span//a[@kind="primary"]')
  await expect(page.locator('text=Our Stores').first()).toBeVisible()
  await page.click('//span[text()="Dallas"]')
});