const {test, expect} = require("@playwright/test");

test.describe.configure({mode: 'parallel'}); //test files will trigger parallel
test("@Web Popup Validations", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();

    //Element Displayed Example
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    // await page.pause();

    //Switch To Alert Example
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();

    //Mouse Hover Example
    await page.locator("#mousehover").hover();

    //iFrame Example
    const framePage = page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);



});

test("Screenshot & Visual comparision",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
});
//screenshot -store -> screenshot -> 
test('visual',async({page})=>
{
      await page.goto("https://google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})
