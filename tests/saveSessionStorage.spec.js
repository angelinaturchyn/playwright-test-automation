const {test} = require('@playwright/test');
let webContext;

test('Log In through UI on staging gating page', async ({ browser }) => {
 const context = await browser.newContext();  
 const page = await context.newPage(); 
 await page.goto('https:/staging.foxtrotco.com');
 await page.locator('#email').fill('aturchyn@foxtrotco.com')
 await page.locator('#password').fill('Angelina10trinity@')
 await page.locator('button[type="submit"]').click()
 await page.waitForNavigation()
 await page.locator('text="Log in"').click()
 await page.locator('#email').fill('aturchyn@foxtrotco.com')
 await page.locator('#password').fill('1234567')
 await page.locator('button[class*="TangoButton"]').first().click()
 webContext = await context.storageState({path: 'session.json'})
 
});