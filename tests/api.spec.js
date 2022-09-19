const {test, exepect, request} = require('@playwright/test');
const { APIUtils } = require('./utils/apiUtils');
const loginPayload = {email: "loop@gmail.com", password: "1234567"};
const createCartPayload = {cart_type: "standard", on_conflict: "merge", order_type: "pickup", store_id: 2};
const checkoutPayload = {user_id: "123325", addressId: "1019 West Lake", paymentToken: "nxj7hhg",deliveryWindow: {startUTC: "2022-06-06T14:00:00+00:00", endUTC: "2022-06-06T15:00:00+00:00"}};

let userCartID;
let orderId;
const addItemToCartPayload = {cart_id: `${userCartID}`,foxtrot_id: 50171,quantity: 1,store_id: 2,update_values: false, user_id: "123325"}



test('Login and Create a cart', async ({page}) => {
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,loginPayload,createCartPayload)
 
})

test('Add an item to your cart', async({page})=> {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,addItemToCartPayload)
    
    
})

test('Checkout as a logged in user', async({page})=> {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext)
})