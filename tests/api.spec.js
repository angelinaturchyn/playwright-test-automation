const {test, exepect, request, expect} = require('@playwright/test');
const loginPayload = {email: "loop@gmail.com", password: "1234567"};
const createCartPayload = {cart_type: "standard", on_conflict: "merge", order_type: "delivery", store_id: 2};

const checkoutPayload = {user_id: "123325", addressId: "1019 West Lake", paymentToken: "nxj7hhg",deliveryWindow: {startUTC: "2022-06-06T14:00:00+00:00", endUTC: "2022-06-06T15:00:00+00:00"}};
let token = 'Bearer 37512|UEhu6O9EPnOLh6Qjakn2bW0oabXHLgoGxbyo6WjU'
let userCartID;
const addItemToCartPayload = {cart_id: `${userCartID}`,foxtrot_id: 50171,quantity: 1,store_id: 2,update_values: false, user_id: "123325"}


test.beforeEach( async()=> {
    const apiContext = await request.newContext();
    const responseAuth = await apiContext.post("https://staging.api.foxtrotchicago.com/v5/login",
     {
         data: loginPayload
     })
    expect(responseAuth.ok()).toBeTruthy();
    const loginResponseJson = await responseAuth.json();
    console.log(loginResponseJson)
    tokenLogin = await loginResponseJson.user.api_token;
    console.log(tokenLogin)
})

test('Create cart', async ({page}) => {

   const apiContext = await request.newContext();
   const createCartResponse = await apiContext.post("https://staging.api.foxtrotchicago.com/v6/cart/",
     {
        data: createCartPayload,
        headers: 
        {
          'Authorization':  token,
          'Content-type': 'application/json'
        }
     })

    const createCartResponseJson = await createCartResponse.json();
    console.log(createCartResponseJson)
    userCartID = await createCartResponseJson.cart.cart_id;
    console.log(userCartID)
})

test('Add an item to your cart', async({page})=> {

    const apiContext = await request.newContext();
    const addAnItemToCart = await apiContext.post( `https://staging.api.foxtrotchicago.com/v6/cart/${userCartID}`, 
    
    {
        data: addItemToCartPayload,
        headers: 
        {
            'Authorization': token,
            'Content-type': 'application/json'
        }
    })

    const addAnItemToCartResponse = await addAnItemToCart.json();
    console.log(addAnItemToCartResponse)
   
})

test('Checkout as a logged in user', async({page})=> { 

    const apiContext = await request.newContext();
    const completeOrder = await apiContext.post("https://staging.api.foxtrotchicago.com/v5/orders-v2", 
    
    {
        data: checkoutPayload,
        headers: 
        {
            'Authorization': token,
            'Content-type': 'application/json'
        }

    })

    console.log(completeOrder)
    const completeOrderJson = await completeOrder.json()
    console.log(completeOrderJson)
})