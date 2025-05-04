import { MyActions } from "../utils/Actions";

export class LoginPage extends MyActions {
    get txtUsername() { return this.page.locator('#username'); }
    get txtPassword() { return this.page.locator('#password'); }
    get btnLogin() { return this.page.locator('button[type="submit"]'); }
    get flashMessage() { return this.page.locator("#flash"); }
   
    async login(username: string, password: string) {
      await this.typeText(this.txtUsername, username);
      await this.typeText(this.txtPassword, password);
      await this.clickElement(this.btnLogin);
    }

    async getFlashMessage(): Promise<string | null> {
        return await this.flashMessage.textContent();
    }

    async checkForMessage(msg: string): Promise<void> {
        await this.validateTextContains(this.flashMessage, msg);
    }
}
  
  