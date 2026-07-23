const { test,expect } = require("@playwright/test");

test("Security test request intercept", async ({ page }) => {
  //login and rech orders page
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("deardear25443@gmail.com");
  await page.locator("#userPassword").fill("Pyn_6344");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  await page.locator("button[routerlink*='myorders']").click();

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a3bb229378febeacdc97c2d",
      }),
  );
  await page.locator("button:has-text('View')").first().click();
  await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order")
});
