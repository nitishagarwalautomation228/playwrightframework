import { expect, Locator, Page } from "@playwright/test";
import * as fs from "fs";
import { Logger } from "./Logger"; // Adjust path as needed

export class MyActions {
    page: Page;
    downloadPath: string;
    logger: Logger;

    constructor(page: Page, logger: Logger) {
        this.page = page;
        this.logger = logger;
        this.downloadPath = "../downloads/";
    }

    async clickElement(locator: Locator): Promise<void> {
        await locator.click();
        this.logger.info("Clicked element");
    }

    async typeText(locator: Locator, textToBeEntered: string): Promise<void> {
        await locator.fill(textToBeEntered);
        this.logger.info(`Entered text: ${textToBeEntered}`);
    }

    async pressKey(keyPress: string): Promise<void> {
        await this.page.keyboard.press(keyPress);
        this.logger.info(`Pressed key: ${keyPress}`);
    }

    async pressKeyinLocator(locator: Locator, keyPress: string): Promise<void> {
        await locator.press(keyPress);
        this.logger.info(`Pressed key '${keyPress}' on locator`);
    }

    async checkVisible(locator: Locator, isVisible: boolean = true): Promise<void> {
        if (isVisible) {
            await expect(locator).toBeVisible();
            this.logger.info("Element is visible as expected");
        } else {
            await expect(locator).not.toBeVisible();
            this.logger.info("Element is NOT visible as expected");
        }
    }

    async checkEnable(locator: Locator, isEnable: boolean = true): Promise<void> {
        if (isEnable) {
            await expect(locator).toBeEnabled();
            this.logger.info("Element is enabled as expected");
        } else {
            await expect(locator).not.toBeEnabled();
            this.logger.info("Element is NOT enabled as expected");
        }
    }

    async validateTextEquals(locator: Locator, textToCheck: string): Promise<void> {
        try {
            await expect(locator).toHaveText(textToCheck);
            this.logger.info(`Verified text: ${textToCheck}`);
        } catch (error1) {
            this.logger.error(`Unable to verify text: ${textToCheck}`);
            throw error1;
        }
    }

    async validateTextContains(locator: Locator, textToCheck: string): Promise<void> {
        try {
            await expect(locator).toContainText(textToCheck);
            this.logger.info(`Verified text: ${textToCheck}`);
        } catch (error1) {
            this.logger.error(`Unable to verify text: ${textToCheck}`);
            throw error1;
        }
    }

    async logStep(message: string): Promise<void> {
        this.logger.info(message);
    }

    async uploadFile(locator: Locator, fileName: string) {
        await locator.setInputFiles(fileName);
        this.logger.info(`Uploaded file: ${fileName}`);
    }

    async downloadFile(locator: Locator, fileName: string) {
        const [downloadFile] = await Promise.all([
            this.page.waitForEvent("download"),
            locator.click()
        ]);
        await downloadFile.saveAs(this.downloadPath + fileName);
        this.logger.info(`Downloaded file: ${fileName}`);
    }

    async setChecked(locator: Locator, checkedStatus: boolean) {
        await locator.setChecked(checkedStatus);
        this.logger.info(`Checkbox set to: ${checkedStatus}`);
    }

    async selectByText(locator: Locator, valueToSelect: string) {
        await locator.selectOption(valueToSelect);
        this.logger.info(`Selected option: ${valueToSelect}`);
    }

    async waitForVisible(locator: Locator, numberOfSeconds: number) {
        await locator.waitFor({ state: "visible", timeout: numberOfSeconds * 1000 });
        this.logger.info(`Waited for ${numberOfSeconds}s until element became visible`);
    }
}
