import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/Login";
import { Logger } from "../utils/Logger";

let logger: Logger;

test("Login test", async ({ page }, testinfo) => {
    logger = new Logger(testinfo.title)
    const login = new LoginPage(page, logger);
    await page.goto("/login");
    await login.login("tomsmith", "SuperSecretPassword!");
 
    const message = await login.getFlashMessage();
    await login.checkForMessage("You logged into a secure area!");
});

test("Invalid login should show error message", async ({ page }, testinfo) => {
    logger = new Logger(testinfo.title)
    const login = new LoginPage(page, logger);

    await page.goto("/login");
    await login.login("wronguser", "wrongpass");

    const message = await login.getFlashMessage();
    await login.checkForMessage("Your username is invalid!");
});

test.afterEach(() => {
    logger.close();
})
