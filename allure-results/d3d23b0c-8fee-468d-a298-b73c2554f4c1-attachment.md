# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppOtherWay.spec.js >> @Web Client App login
- Location: tests\ClientAppOtherWay.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | test("@Web Client App login", async ({ page }) => {
  4  |   const email = "anshika@gmail.com";
  5  |   const productName = "ZARA COAT 3";
  6  |   const products = page.locator(".card-body");
  7  |   await page.goto("https://rahulshettyacademy.com/client");
  8  |   await page.getByPlaceholder("email@example.com").fill(email);
  9  |   await page.getByPlaceholder("enter your passsword").type("Iamking@000");
  10 |   await page.getByRole("button", { name: "Login" }).click();
  11 |   await page.waitForLoadState("networkidle"); //call API
  12 |   await page.locator(".card-body b").first().waitFor();
  13 | 
  14 |   await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", {name: "Add To Cart"}).click();
  15 | 
  16 |   await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
  17 | 
> 18 |   await page.locator("div li").first().waitFor(); //wait until the element show up in page
     |                                        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  19 |   await expect(page.getByText("ZARA COAT 3")).toBeVisible(); //ตรวจสอบว่า element ที่มีข้อความ ZARA COAT 3 มีการแสดงผลอยู่ในหน้าไหม
  20 |   await page.getByRole("button", { name: "Checkout" }).click();
  21 | 
  22 |   await page.getByPlaceholder("Select Country").pressSequentially("Ind");
  23 |   await page.getByRole("button", { name: "India" }).nth(1).click();
  24 |   await page.getByText("PLACE ORDER").click(); 
  25 |   //  await page.getByText("Place Order").click(); 
  26 | 
  27 |   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
  28 | });
  29 | 
```