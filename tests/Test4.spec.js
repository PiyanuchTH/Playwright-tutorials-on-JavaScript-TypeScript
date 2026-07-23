const { test, expect, request } = require("@playwright/test");
const GMAIL_USER = {
    email: "deardear25443@gmail.com",
    password: "Pyn_6344"
};

const YAHOO_USER = {
    email: "deardear25443@yahoo.com",
    password: "Pyn_yah00"
};

async function loginAs(page, user) {
    
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill(user.email);
    await page.locator('[type="password"]').fill(user.password);
    await page.locator("#login-btn").click();
    await expect(page.getByText("Browse Events →")).toBeVisible();
}

let yahooBookingId;


test.beforeAll("Login as Yahoo user via API", async ({ request }) => {
    const loginRes = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {data: {
            email: YAHOO_USER.email,
            password: YAHOO_USER.password
        }}
    )
    expect(loginRes.ok()).toBeTruthy();
    const loginData = await loginRes.json();
    const token = loginData.token;
    console.log(token);
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwNjYxLCJlbWFpbCI6ImRlYXJkZWFyMjU0NDNAZ21haWwuY29tIiwiaWF0IjoxNzgyNzI4NTQ0LCJleHAiOjE3ODMzMzMzNDR9.-Hx74JeeIIbXRRaXhvshAggVaBKGtsbLdWuor-gn9Bc

    const dataRes = await request.get("https://api.eventhub.rahulshettyacademy.com/api/events",
        {headers: {
            Authorization: `Bearer ${token}`
        }}
    )

    expect(dataRes.ok()).toBeTruthy();
    const getData = await dataRes.json();
    console.log(getData);
    const availableEvent = getData.data.find(
    event => Number(event.availableSeats) > 0
    );

    expect(
        availableEvent,
        "No event with available seats was found"
    ).toBeTruthy();

    const eventId = availableEvent.id;

    const bookingsRes = await request.post("https://api.eventhub.rahulshettyacademy.com/api/bookings",
        {headers: {
            Authorization: `Bearer ${token}`
        },
        data:{
            eventId: eventId,
            customerName: "Dear",
            customerEmail: YAHOO_USER.email,
            customerPhone: "0987654321",
            quantity : 1
        }}
    )
    console.log("Booking status:", bookingsRes.status());
    console.log("Booking response:", await bookingsRes.text());
    expect(bookingsRes.ok()).toBeTruthy();
    const postData = await bookingsRes.json();
    console.log(postData);
    yahooBookingId = postData.data.id;
    expect(yahooBookingId).toBeTruthy();
    console.log(yahooBookingId);

});

test("Gmail user", async ({ page }) => {
    await loginAs(page, GMAIL_USER);
    await page.goto(`https://eventhub.rahulshettyacademy.com/bookings/${yahooBookingId}`, {
    waitUntil: "networkidle",
  });

   await expect(
        page.getByText("Access Denied", { exact: true })
    ).toBeVisible();

    await expect(
        page.getByText(
            "You are not authorized to view this booking"
        )
    ).toBeVisible();
});     

test("Yahoo user", async ({ page }) => {
    await loginAs(page, YAHOO_USER);
});