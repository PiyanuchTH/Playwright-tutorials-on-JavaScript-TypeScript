const { test, expect } = require("@playwright/test");

test("@Web Client App login", async ({ page }) => {
  const email = "anshika@gmail.com";
  const productName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").type("Iamking@000");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle"); //call API
  await page.locator(".card-body b").first().waitFor();

  await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", {name: "Add To Cart"}).click();

  await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();

  await page.locator("div li").first().waitFor(); //wait until the element show up in page
  await expect(page.getByText("ZARA COAT 3")).toBeVisible(); //ตรวจสอบว่า element ที่มีข้อความ ZARA COAT 3 มีการแสดงผลอยู่ในหน้าไหม
  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("Select Country").pressSequentially("Ind");
  await page.getByRole("button", { name: "India" }).nth(1).click();
  await page.getByText("PLACE ORDER").click(); 
  //  await page.getByText("Place Order").click(); 

  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});
