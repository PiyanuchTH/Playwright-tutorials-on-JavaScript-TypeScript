const { test, expect } = require("@playwright/test");

test("@Web Browser Context-Validation Error Login", async ({ browser }) => {
  //playwright code
  //step1 : open the browser
  //step2 : enter u/p browser
  //step3 : click

  //chrome - plugins/ cookies

  const context = await browser.newContext();
  const page = await context.newPage();
  // page.route("**/*.{jpg,png,jpeg}", route => route.abort()); //block
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  page.on('request', request => console.log(request.url()));
  page.on('response', response => console.log(response.url(), response.status()));
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //get title - assertion

  console.log(await page.title());
  // await expect(page).toHaveTitle("Google");
  //css  type, fill
  await userName.type("rahulshettyacademy");
  await page.locator('[type="password"]').type("Learning@830$3mK2");
  await signInBtn.click();
  //wait until this locator show up page
  //webdriverwait
  // console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  //type,fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signInBtn.click();
  // console.log(await cardTitles.first().textContent());
  // console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

test("@Web UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signInBtn = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult"); //selectOption -> select dropdown

  // console.log(await page.locator("#username").inputValue());

  await page.locator(".radiotextsty").last().click(); // . -> class
  await page.locator("#okayBtn").click(); // # -> id
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  await page.locator("#terms").click(); //click checkbox
  await expect(page.locator("#terms")).toBeChecked(); //assertion

  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await expect(documentLink).toHaveAttribute("class", "blinkingText");
  //assertion
  //await page.pause();  //คำสั่งเพื่อหยุดการทำงานของเทสไว้ที่จุดนี้ เพื่อให้เราสามารถตรวจสอบสถานะของหน้าเว็บได้
});

// test("Child Window Handling", async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   const userName = page.locator("#username");
//   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

//   const documentLink = page.locator("[href*='documents-request']");

//   const [newPage] = await Promise.all([
//     context.waitForEvent("page"), //listen for any new page  pending, rejectde,fulfilled
//     //สถานะของการดำเนินการนั้น หรือสิ่งที่ส่งคืนมา เรียกว่า Promise
//     documentLink.click(), //when click new page is opened
//   ]);

//   const text = await newPage.locator(".red").textContent();
//   const arrayText = text.split("@");
//   const domain = arrayText[1].split(" ")[0];
//   // console.log(text);
//   // console.log(domain);
//   await page.locator("#username").fill(domain);
//   // await page.pause();
//   console.log(await page.locator("#username").inputValue());
// });
