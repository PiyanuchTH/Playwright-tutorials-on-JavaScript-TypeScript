const { test, expect } = require("@playwright/test");

test.only("@Test1 Admin App login", async ({ page }) => {
  const email = "deardear25443@gmail.com";
  const specificDate = "2026-12-03T19:00";
  const price = Number(245);
  const totalSeats = Number(50);
  await page.goto("https://eventhub.rahulshettyacademy.com");
  await page.getByPlaceholder("you@email.com").fill(email);
  await page.locator('[type="password"]').fill("Pyn_6344");
  await page.locator("#login-btn").click();
  await expect(page.getByText("Browse Events →")).toBeVisible();

  //Step 2
    await page.locator("[href*='/admin/events']").click();

    await page.locator("#event-title-input").fill("BTS WORLD TOUR 'ARIRANG' IN BANGKOK");
    await page.locator("#admin-event-form textarea").fill("Tickets go on sale June 11, 2026.");
    await page.locator("#category").selectOption("Concert");
    await page.getByLabel("City").fill("Bangkok");
     await page.getByLabel("Venue").fill("Bangkok");

      //    await page.getByLabel("Event Date & Time").inputValue("2026-12-03T19:00").click();
      // await page.fill('#event-date-&-time', specificDate);
       await page.getByLabel("Event Date & Time").fill(specificDate);

     await page.getByLabel("Price ($)").pressSequentially(price.toString());
     await page.getByLabel("Total Seats").pressSequentially(totalSeats.toString());
     await page.getByLabel("Image URL (optional)").fill("https://www.thaiticketmajor.com/img_poster/prefix_1/0749/6749/bts-world-tour-arirang-in-bangkok-6a0fd73c8f65b-l.png");

     await page.locator("#add-event-btn").click();
      await expect(page.getByText("Event created!")).toBeVisible();

  //Step 3
  await page.locator("#nav-events", "[href*='/events']").click();
  //   await page.waitForLoadState("networkidle");
  await page.locator('[data-testid="event-card"]').first().waitFor();
  // await page.locator(".bg-white rounded-2xl article").toBeVisible();
  await page.waitForTimeout(5000);

  // await page.locator("h3").filter({ hasText: "BTS WORLD TOUR 'ARIRANG' IN BANGKOK" });
  const card = page
    .locator('[data-testid="event-card"]')
    .filter({ hasText: "BTS WORLD TOUR 'ARIRANG' IN BANGKOK" });

  //Step 4
  await card.locator("#book-now-btn").click();

  //Step 5
  await page.locator("#ticket-count").isVisible();
  const ticketCount = page.locator("button").filter({ hasText: "+" });
  await ticketCount.click(2);
  await page.getByLabel("Full Name").fill("Piyanuch Thong-iad");
  await page.locator("#customer-email").fill("deardear25443@gmail.com");
  await page.getByPlaceholder("+91 98765 43210").fill("0980915461");
  await page.locator(".confirm-booking-btn").click();

  //Step 6
  await page.locator(".booking-ref").first().isVisible();
 

  //Step 7
  await page.locator("#nav-bookings", "[href*='/bookings']").click();

  await page.locator("#booking-card").first().waitFor();

  await page.waitForTimeout(5000);

  // await page.locator(".booking-ref", { hasText: "B-G2U0L4" }).isVisible();
  await expect(page.locator(".booking-ref", { hasText: "B-G2U0L4" })).toBeVisible();
  // console.log(await page.locator(".booking-ref", { hasText: "D-7S4KGB" }).textContent());
  await expect(page.getByText("BTS WORLD TOUR 'ARIRANG' IN BANGKOK")).toBeVisible();

  //Step 8
  const seatsAfterBooking  = 48;
  const seatsBeforeBooking = 50;

  await page.locator("#nav-events", "[href*='/events']").click();
  await page.locator("#event-card").first().waitFor();

  // const card = page
  //   .locator('#event-card')
  //   .filter({ hasText: "BTS WORLD TOUR 'ARIRANG' IN BANGKOK" });
  await expect(card.locator(".text-emerald-600")
).toContainText(String(seatsAfterBooking));

  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 2);

});
