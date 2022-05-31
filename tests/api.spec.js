const {test, exepect, request, expect} = require('@playwright/test');
const loginPayload = {email: "loop@gmail.com", password: "123456"}
let token;

test.beforeAll( async ()=> {

    const apiContext = await request.newContext();
    const responseAuth = await apiContext.post("https://staging.api.foxtrotchicago.com/v6/login", {data:loginPayload})
    expect(responseAuth.ok()).toBeTruthy();
    const loginResponseJson = await responseAuth.json();
    console.log(loginResponseJson)
    token = await loginResponseJson.user.api_token;
    console.log(token)
});


test.beforeEach( ()=> {

})

test('Successful login', async ({page}) => {

})