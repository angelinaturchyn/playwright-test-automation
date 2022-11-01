const {test, exepect, request} = require('@playwright/test');
const { APIUtils } = require('./utils/apiUtils');
const backboneLogin = {username: "a.com", password: "@"}
const loginPayload = {email: "loop@gmail.com", password: "1234567"};
const createCartPayload = {cart_type: "standard", on_conflict: "merge", order_type: "pickup", store_id: 2};
const fakePayLoadOrders = {status:1,orders:[]}
let backBoneToken
let staging
let webContext

test.beforeAll(async () => {
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,backboneLogin)
   backBoneToken = apiUtils.loginBackbone()
})

test('Login to staging',async({page}) => {
   const apiContext = await request.newContext();
   await apiContext.post("https://backbone.api.foxtrotco.com/v1/login", {
      headers: {
        'Accept': 'application/json',
      },
      data: {
         'Authorization': backBoneToken,
      }
    });
  
   await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
   }, backBoneToken)

     await page.goto("https://staging.foxtrotco.com/home")
     await page.waitForURL("https://staging.foxtrotco.com/account/profile")
})
