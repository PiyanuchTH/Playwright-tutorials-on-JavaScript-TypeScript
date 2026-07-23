const { test, expect } = require("@playwright/test");

// test.only('Browser Context-Validation Error Login', async ({page}) => {

//     await page.goto('https://rahulshettyacademy.com/client');
//     await page.locator("#userEmail").fill("anshika@gmail.com");
//     await page.locator("#userPassword").fill("Iamking@000");
//     await page.locator("[value='Login']").click();
//     await page.waitForLoadState('networkidle')  //call API

//     const tiltes = await page.locator(".card-body b").allTextContents();

//     console.log(tiltes);
// })

test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);

})

// test("Client App Login", async ({ page }) => {
//   const email = "anshika@gmail.com";
//   const productName = "ZARA COAT 3";
//   const products = page.locator(".card-body");
//   await page.goto("https://rahulshettyacademy.com/client");
//   await page.locator("#userEmail").fill("anshika@gmail.com");
//   await page.locator("#userPassword").fill("Iamking@000");
//   await page.locator("[value='Login']").click();
//   await page.waitForLoadState("networkidle"); //call API
//   const tiltes = await page.locator(".card-body b").allTextContents();
//   console.log(tiltes);
//   const count = await products.count();
//   for (let i = 0; i < count; ++i) {
//     if ((await products.nth(i).locator("b").textContent()) === productName) {
//       await products.nth(i).locator("text= Add To Cart").click();
//       break;
//     }
//   }

//   await page.locator("[routerlink*='cart']").click(); // click on cart for routing to another page
//   await page.locator("div li").first().waitFor(); //wait until the element show up in page
//   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); //ตรวจสอบว่า element ที่มีข้อความ ZARA COAT 3 มีการแสดงผลอยู่ในหน้าไหม
//   expect(bool).toBeTruthy(); //
//   await page.locator("text=Checkout").click(); //click checkout

//   await page
//     .getByPlaceholder("Select Country") //ค้นหา element ที่มี placeholder เป็น Select Country
//     .pressSequentially("Ind", { delay: 150 }); //ใส่ข้อมูลลงในช่องแบบไม่ต้องใส่ข้อม฿ลครบ
//   const dropdown = page.locator(".ta-results"); 
//   await dropdown.waitFor(); 
//   const optionsCount = await dropdown.locator("button").count(); 
//   for (let i = 0; i < optionsCount; ++i) { //สว่นนี้คือหาว่าคีย์เวิร์ดที่ให้ ind มีตัวเลือกอะไรบ้างใน dropdown แล้วเลือกตัวที่ตรงกับ India
//     const text = await dropdown.locator("button").nth(i).textContent();
//     if (text === " India") {
//       await dropdown.locator("button").nth(i).click();
//       break;
//     }
//   }

//   expect(page.locator(".user__name [type='text']").first()).toHaveText(email); //ตรวจสอบว่า element ที่มี class user__name และ type text มีข้อความตรงกับ email ที่เรากำหนดไว้ในตอนแรกไหม
//   await page.locator(".action__submit").click(); 
//   await expect(page.locator(".hero-primary")).toHaveText(
//     " Thankyou for the order. ",
//   );
//   const orderId = await page
//     .locator(".em-spacer-1 .ng-star-inserted")
//     .textContent();
//   console.log(orderId);

//   await page.locator("button[routerlink*='myorders']").click(); 
//   await page.locator("tbody").waitFor();
//   const rows = await page.locator("tbody tr");

//   for (let i = 0; i < (await rows.count()); ++i) {
//     const rowOrderId = await rows.nth(i).locator("th").textContent();
//     if (orderId.includes(rowOrderId)) {
//       await rows.nth(i).locator("button").first().click();
//       break;
//     }
//   }
//   const orderIdDetails = await page.locator(".col-text").textContent();
//   expect(orderId.includes(orderIdDetails)).toBeTruthy();
// });
