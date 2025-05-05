import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/Login";
import { Logger } from "../utils/Logger";
import { TestRunner } from "../utils/TestControl";


test.describe("Login test", ()=> {
    let logger: Logger;
    let testRunner:TestRunner = new TestRunner();;

testRunner.shouldRun("Positive Login test") &&
test(`${testRunner.getTestCaseName()}`, async ({ page }, testinfo,) => {
    testinfo.retry = testRunner.getRetries()?? 0;
    
    logger = new Logger(testinfo.title)
    const login = new LoginPage(page, logger);
    await page.goto("/login");
    await login.login(testRunner.getTestData("username"), testRunner.getTestData("password"));
 
    const message = await login.getFlashMessage();
    await login.checkForMessage("You logged into a secure area!");
});

testRunner.shouldRun("Negative Login test") &&
test(`${testRunner.getTestCaseName()}`, async ({ page }, testinfo) => {
    testinfo.retry = testRunner.getRetries()?? 0;
    
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

})