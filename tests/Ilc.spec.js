const { test, expect } = require("@playwright/test");

test("Playwright Special Locators", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", { name: "Shop" }).click();
    // await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button", { name: "Add" }).click();
    await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();

    //locator (CSS)

    //เสริมถถ้าจะใช้ getByLabel
    //await page.getByLabel("Password").fill("abc123");
    //<label>Password<input type="password"/></label>


});