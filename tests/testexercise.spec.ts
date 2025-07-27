import { expect, test, request } from "@playwright/test";

test("Calender assertion", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator(".react-date-picker__calendar-button").click();
    await page.locator("[aria-label=\"June 20, 2025\"]").click();

    expect(page.locator("[name=\"month\"]")).toHaveValue("6");
    expect(page.locator("[name=\"day\"]")).toHaveValue("20");
    expect(page.locator("[name=\"year\"]")).toHaveValue("2025");
})

function getBaseUrl(env: string): string {
  if(env.includes("dev")) return "https://dev.example.com";
  else if(env.includes("qa")) return "https://qa.example.com";
  else if(env.includes("prod")) return "https://example.com";
  return "";
}

