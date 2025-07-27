# Test info

- Name: Calender assertion
- Location: C:\Nitish\Playwright Framework\tests\testexercise.spec.ts:3:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[aria-label="June 20, 2025"]')

    at C:\Nitish\Playwright Framework\tests\testexercise.spec.ts:7:58
```

# Page snapshot

```yaml
- banner: GREENKART
- text: "Page size:"
- combobox "Page size:":
  - option "5" [selected]
  - option "10"
  - option "20"
- text: "Search:"
- searchbox "Search:"
- list "Pagination":
  - listitem:
    - button "First" [disabled]
  - listitem:
    - button "Previous" [disabled]
  - listitem:
    - button "1 (current)"
  - listitem:
    - button "2"
  - listitem:
    - button "3"
  - listitem:
    - button "4"
  - listitem:
    - button "Next"
  - listitem:
    - button "Last"
- 'table "Sorted by name: descending order"':
  - alert: "Sorted by name: descending order"
  - rowgroup:
    - 'row "Veg/fruit name: activate to sort column ascending Price: activate to sort column ascending Discount price: activate to sort column ascending"':
      - 'columnheader "Veg/fruit name: activate to sort column ascending"': Veg/fruit name
      - 'columnheader "Price: activate to sort column ascending"': Price
      - 'columnheader "Discount price: activate to sort column ascending"': Discount price
  - rowgroup:
    - row "Wheat 67 28":
      - cell "Wheat"
      - cell "67"
      - cell "28"
    - row "Tomato 37 26":
      - cell "Tomato"
      - cell "37"
      - cell "26"
    - row "Strawberry 23 15":
      - cell "Strawberry"
      - cell "23"
      - cell "15"
    - row "Rice 37 46":
      - cell "Rice"
      - cell "37"
      - cell "46"
    - row "Potato 34 22":
      - cell "Potato"
      - cell "34"
      - cell "22"
- text: Delivery Date 0
- spinbutton: "7"
- text: /
- spinbutton: "23"
- text: /
- spinbutton: "2025"
- button:
  - img
- button:
  - img
- button "«"
- button "‹"
- button "July 2025"
- button "›"
- button "»"
- text: Mon Tue Wed Thu Fri Sat Sun
- button "June 30, 2025": "30"
- button "July 1, 2025": "1"
- button "July 2, 2025": "2"
- button "July 3, 2025": "3"
- button "July 4, 2025": "4"
- button "July 5, 2025": "5"
- button "July 6, 2025": "6"
- button "July 7, 2025": "7"
- button "July 8, 2025": "8"
- button "July 9, 2025": "9"
- button "July 10, 2025": "10"
- button "July 11, 2025": "11"
- button "July 12, 2025": "12"
- button "July 13, 2025": "13"
- button "July 14, 2025": "14"
- button "July 15, 2025": "15"
- button "July 16, 2025": "16"
- button "July 17, 2025": "17"
- button "July 18, 2025": "18"
- button "July 19, 2025": "19"
- button "July 20, 2025": "20"
- button "July 21, 2025": "21"
- button "July 22, 2025": "22"
- button "July 23, 2025": "23"
- button "July 24, 2025": "24"
- button "July 25, 2025": "25"
- button "July 26, 2025": "26"
- button "July 27, 2025": "27"
- button "July 28, 2025": "28"
- button "July 29, 2025": "29"
- button "July 30, 2025": "30"
- button "July 31, 2025": "31"
- button "August 1, 2025": "1"
- button "August 2, 2025": "2"
- button "August 3, 2025": "3"
```

# Test source

```ts
   1 | import { expect, test, request } from "@playwright/test";
   2 |
   3 | test("Calender assertion", async ({page}) => {
   4 |     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   5 |
   6 |     await page.locator(".react-date-picker__calendar-button").click();
>  7 |     await page.locator("[aria-label=\"June 20, 2025\"]").click();
     |                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
   8 |
   9 |     expect(page.locator("[name=\"month\"]")).toHaveValue("6");
  10 |     expect(page.locator("[name=\"day\"]")).toHaveValue("20");
  11 |     expect(page.locator("[name=\"year\"]")).toHaveValue("2025");
  12 | })
  13 |
  14 | function getBaseUrl(env: string): string {
  15 |   if(env.includes("dev")) return "https://dev.example.com";
  16 |   else if(env.includes("qa")) return "https://qa.example.com";
  17 |   else if(env.includes("prod")) return "https://example.com";
  18 |   return "";
  19 | }
  20 |
  21 |
```