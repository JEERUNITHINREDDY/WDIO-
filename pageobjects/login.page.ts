import Page from "./page";

class LoginPage extends Page {
    get inputUsername() {
        return $('//input[@id ="Email"]')
    }
    get inputPassword() {
        return $('//input[@id ="Password"]')
    }
    get clicklogin() {
        return $('//input[@value="Log in"]')
    }

    async login(username: string, password: string) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.clicklogin.click()
    }
    open() {
        return super.open('login')
    }
}
export default new LoginPage()
