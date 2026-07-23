const { test, expect, request } = require("@playwright/test");
const { APiUtils } = require("../utils/APiUtils");
const loginPayload = {
  userEmail: "deardear25443@gmail.com",
  userPassword: "Pyn_6344",
};
const orderPayload = {
  orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }],
};
const fakePayloadOrders = { data: [], message: "No Orders" };

let token;
let orderId;

let response;
test.beforeAll(async () => {
  //Login API
  const apiContext = await request.newContext();
  const apiUtils = new APiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
});

//test 1, test 2, test 3
//Create order is success
test("Place the order", async ({ page }) => {
  // const apiUtils = new ApiUtils(apiContext, loginPayload);
  // const orderId = createOrder(orderPayload);
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/");
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayloadOrders);
      route.fulfill({
        response,
        body,
      });
      //intercepting response - APi response -> {playwright fakeresponse} -> browser -> render data on front end
    },
  );
  // await page.pause();
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  );
  // await page.locator("tbody").waitFor();
  // const rows = await page.locator("tbody tr");
  console.log(await page.locator(".mt-4").textContent());
});
