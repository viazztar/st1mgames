const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
const loginUrl = 'https://store.steampowered.com/login/?redir=&redir_ssl=1';
describe('Login', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
    });
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to login', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
       this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
});

    it('should be able to logout', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login();
        this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
        // Click on profile icon
        this.loginPage.AccountPulldownLnk.click();
        // Click on logout icon
        this.loginPage.LogoutLnk.click();
        // Verify that it was logout and link for login is existing
        this.loginPage.HomepageLoginLnk.isExisting();
    });

    it('should not be able to login with incorrect password', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.loginIncorrectPassword();
        // Verify that user was not logged and it has error message 
        this.loginPage.ErrorMsg.isExisting();
    });
});    
