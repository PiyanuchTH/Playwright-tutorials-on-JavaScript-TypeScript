const { test, expect } = require("@playwright/test");
const { customtest } = require("../utils/test-base");

const {POManager} = require("../pageobjects/POManager")
//JSON file -> string -> object
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));


for(const data of dataset)
{test(`@Web Client App login for ${data.productName}`, async ({ page }) => {
   //js file- Login js, DashboardPage
   // const username = dataset.username;
   // const password = dataset.password;
   // const productName = dataset.productName;
   const poManager = new POManager(page);
   const products = page.locator(".card-body");
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validateLogin(data.username, data.password);
   
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(data.productName);
   await dashboardPage.navigateToCart();
   
   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(data.productName);
   await cartPage.Checkout();

   const ordersReviewPage = poManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind","India");
   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
}

customtest(`Client App login`, async ({ page,testDataForOrder  }) => {
   //js file- Login js, DashboardPage
   const products = page.locator(".card-body");
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage(); 
   await loginPage.goTo();
   await loginPage.validateLogin(testDataForOrder.username, testDataForOrder.password);
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(testDataForOrder.productName);
   await dashboardPage.navigateToCart();
   
   
   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
   await cartPage.Checkout();
});

//test files will trigger parallel
//individaul tests in yhe file will run in sequence
