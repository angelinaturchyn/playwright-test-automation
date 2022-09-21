const {test, exepect, request} = require('@playwright/test');
const { APIUtils } = require('./utils/apiUtils');
const backboneLogin = {username: "aturchyn@foxtrotco.com", password: "Angelina10trinity@"}
const loginPayload = {email: "loop@gmail.com", password: "1234567"};
const createCartPayload = {cart_type: "standard", on_conflict: "merge", order_type: "pickup", store_id: 2};
const fakePayLoadOrders = {status:1,orders:[]}
let token


test.only('Login as an auth user', async ({page}) => {
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,backboneLogin,loginPayload)
   await apiUtils.loginBackbone()
   token = await apiUtils.getToken()

  //  page.addInitScript(value => {
  //   window.localStorage.setItem('token', value);
  // }, token)
  
   await page.goto(' https://foxtrot-next-fe-sandbox.onrender.com/home')
   page.pause()


  //  await page.route(`https://staging.api.foxtrotchicago.com/v5/users/order-history?`,
  //  async route => {
  //     const response = await page.request.fetch(route.request())
  //     let body = fakePayLoadOrders
  //     route.fulfill(
  //       {
  //           response,
  //           body
  //       }
  //     )
  //  })
   
})
