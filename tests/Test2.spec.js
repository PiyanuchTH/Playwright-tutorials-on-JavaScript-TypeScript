const { test, expect } = require("@playwright/test");

test.only("@Test2 Booking Ticket", async ({ page }) => {
//Test 1
  //Step 1
  const email = "deardear25443@gmail.com";
  await page.goto("https://eventhub.rahulshettyacademy.com");
  await page.getByPlaceholder("you@email.com").fill(email);
  await page.locator('[type="password"]').fill("Pyn_6344");
  await page.locator("#login-btn").click();
  await expect(page.getByText("Browse Events →")).toBeVisible();

  //Step 2
    await page.locator("#nav-events", "[href*='/events']").click();
    await page.locator('[data-testid="event-card"]').first().locator("#book-now-btn").click();

    await page.getByLabel("Full Name").fill("Piyanuch Thong-iad");
    await page.locator("#customer-email").fill("deardear25443@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("0980915461");
    await page.locator(".confirm-booking-btn").click();

  //Step 3
  await page.locator("#nav-bookings", "[href*='/bookings']").click();
  await page.locator("button", { hasText: "View Details" }).first().click();
  await page.waitForLoadState("networkidle");

  //Step 4
  expect(page.locator(".font-bold", { hasText: "D-" })).toBeVisible();
  expect(page.locator("h1")).toBeVisible();

  const refText = await page.locator(".font-bold", { hasText: "D-" }).textContent();
  const h1Text = await page.locator("h1").textContent();

  expect(refText.charAt(0).toLowerCase()).toBe(h1Text.charAt(0).toLowerCase());

  //Step 5
  await page.locator('[data-testid="check-refund-btn"]').click();

  const spinner = page.locator("#refund-spinner");
  await expect(spinner).toBeVisible();
  await expect(spinner).toBeHidden({ timeout: 6000 });

  //Step 6
   expect(await page.locator('#refund-result')).toBeVisible();
   expect(await page.getByText('Eligible for refund')).toBeVisible();
   expect(await page.getByText('Single-ticket bookings qualify for a full refund')).toBeVisible();
   

//Test 2
 //Step 2
    await page.locator("#nav-events", "[href*='/events']").click();
    await page.locator('[data-testid="event-card"]').first().locator("#book-now-btn").click();

    const card = page.locator('[data-testid="event-card"]').filter({ hasText: "BTS WORLD TOUR 'ARIRANG' IN BANGKOK" });
    await card.locator("#book-now-btn").click();

    await page.locator("#ticket-count").isVisible();
    const ticketCount = page.locator("button").filter({ hasText: "+" });
    for (let i = 0; i < 2; i++) {
    await ticketCount.click();
    }
    await page.getByLabel("Full Name").fill("Piyanuch Thong-iad");
    await page.locator("#customer-email").fill("deardear25443@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("0980915461");
    await page.locator(".confirm-booking-btn").click();

     //Step 3
  await page.locator("#nav-bookings", "[href*='/bookings']").click();
  const cardBooking = page.locator("#booking-card", { hasText: "BTS WORLD TOUR 'ARIRANG' IN BANGKOK" });
  await expect(cardBooking).toBeVisible();
  const buttonView = cardBooking.locator("button", { hasText: "View Details" });
  await expect(buttonView).toBeVisible();
  await buttonView.click();
  await page.waitForLoadState("networkidle");

  //Step 4
  await expect(page.locator(".font-bold", { hasText: "B-" })).toBeVisible();
  await expect(page.locator("h1")).toBeVisible();

  const refText2 = await page.locator(".font-bold", { hasText: "B-" }).textContent();
  const h1Text2 = await page.locator("h1").textContent();

  expect(refText2.charAt(0).toLowerCase()).toBe(h1Text2.charAt(0).toLowerCase());

  //Step 5
 
  await page.locator('[data-testid="check-refund-btn"]').click();

  const spinner2 = page.locator("#refund-spinner");
  await expect(spinner2).toBeVisible();
  await expect(spinner2).toBeHidden({ timeout: 6000 });

  //Step 6
   expect(await page.locator('#refund-result')).toBeVisible();
   expect(await page.getByText('Not eligible for refund.')).toBeVisible();
   expect(await page.getByText('Group bookings (3 tickets) are non-refundable.')).toBeVisible();
   
});
