const {test, expect, request} = require("@playwright/test");
const {APiUtils} = require('../utils/APiUtils')
const loginPayload = {userEmail: "deardear25443@gmail.com", userPassword: "Pyn_6344"};
const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};


let token;
let orderId;

let response;
test.beforeAll( async () =>
{
    //Login API
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext, loginPayload)
    response = await apiUtils.createOrder(orderPayload);
});

//test 1, test 2, test 3
//Create order is success
test("@API Place the order", async ({ page }) => {
  // const apiUtils = new ApiUtils(apiContext, loginPayload);
  // const orderId = createOrder(orderPayload);
    page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/");

  await page.locator("button[routerlink*='myorders']").click(); 
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (response.orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  await page.pause();
  expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});

//Verify if order created is showing in history page
//Pre 
