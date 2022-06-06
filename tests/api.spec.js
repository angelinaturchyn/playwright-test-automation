const {test, exepect, request, expect} = require('@playwright/test');
const loginPayload = {email: "loop@gmail.com", password: "1234567"};
const orderPayload = {user_id: "123325", foxtrot_id: 55878, quantity: 1}
let token;


test.beforeEach( ()=> {

})

test.only('Successful login', async ({page}) => {
    const apiContext = await request.newContext();
    const responseAuth = await apiContext.post("https://staging.api.foxtrotchicago.com/v5/login",
     {
         data: loginPayload
     })
    expect(responseAuth.ok()).toBeTruthy();
    const loginResponseJson = await responseAuth.json();
    console.log(loginResponseJson)
    token = await loginResponseJson.user.api_token;
    console.log(token)

   const orderResponse = await apiContext.post("https://staging.api.foxtrotchicago.com/v6/cart/549f9fa4-1de8-43eb-bd03-727650d64300",
     {
        data: orderPayload,
        headers: 
        {
          'Authorization':  'Bearer 37512|UEhu6O9EPnOLh6Qjakn2bW0oabXHLgoGxbyo6WjU',
          'Content-type': 'application/json'
        }
     })

    console.log(orderResponse) 
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson)

})