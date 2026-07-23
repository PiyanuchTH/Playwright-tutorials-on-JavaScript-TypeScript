const {After, Before, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const {POManager} = require("../../pageobjects/POManager")

Before(async function () {
    const browser = await playwright.chromium.launch({headless: false});
    const context = await browser.newContext();
    this.page = await context.newPage();  
    this.poManager = new POManager(this.page);

});

BeforeStep(async function () {

});

AfterStep(async function ({result}) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({path: 'screenshot1.png'});
    }
});

After(async function () {
 console.log("I am the last exucute");
});