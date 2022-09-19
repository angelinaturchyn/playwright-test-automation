const {test, exepect, request} = require('@playwright/test');
const { APIUtils } = require('./utils/apiUtils');
const loginPayload = {email: "loop@gmail.com", password: "1234567"};
const createCartPayload = {cart_type: "standard", on_conflict: "merge", order_type: "pickup", store_id: 2};
const fakePayLoadOrders = {"status":1,"orders":[]}



test.only('Login as an auth user', async ({page}) => {
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,loginPayload)
   let token = await apiUtils.getToken()

   await page.route(`https://staging.api.foxtrotchicago.com/v5/users/order-history?`,
   async route => {
      const response = await page.request.fetch(route.request())
      let body = fakePayLoadOrders
      route.fulfill(
        {
            response,
            body,
        }
      )
   })
    await page.goto('https://staging.foxtrotco.com/account/order-history')

})
