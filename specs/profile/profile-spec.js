const assert = require('assert')
const LoginPage = require('../../page_objects/login/login-page');
const ProfilePage = require('../../page_objects/profile/profile-page')
const loginUrl = 'https://store.steampowered.com/login/?redir=&redir_ssl=1';

describe('Profile', () => {
    // This hook runs only once before all tests
    before(() => {
        // Instantiate new Object
        this.loginPage = new LoginPage();
        this.profilePage = new ProfilePage();
    });
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to view games for Mac OS', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
        this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
        // Go to game list of games for Mac OS 
        this.profilePage.GameLnk.waitForDisplayed();
        this.profilePage.GameLnk.moveTo();
        this.profilePage.BrowseByPlatformMacOSX.waitForClickable();
        this.profilePage.BrowseByPlatformMacOSX.click();
        // Chose second game
        this.profilePage.TabGames.scrollIntoView();
        browser.waitUntil(() => {
            return this.profilePage.GamesMacOSLnk.map((elem) => elem.isExisting()).length > 0;
        });
        this.profilePage.GamesMacOSLnk[1].click();
        // Verify Mac OS Image that this game for Mac OS
        this.profilePage.MacOSImg.isExisting();
    });

    it('to see the biggest sector in RPG games', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
        this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
        // Go to RPG game list
        this.profilePage.GameLnk.moveTo();
        this.profilePage.RPGGamesLnk.click();
        // Get number how many game in then "What's Popular" sector
        this.profilePage.WhatsPopularList.scrollIntoView();
        this.profilePage.WhatsPopularList.click();
        let WhatsPopular = this.profilePage.WhatsPopularCount.getText();
        // Get number how many game in then "New and Trending" sector
        this.profilePage.NewAndTrendingList.click();
        this.profilePage.NewAndTrendingCount.waitForDisplayed();
        let NewAndTrending = this.profilePage.NewAndTrendingCount.getText();
        // Get number how many game in then "Top Selling" sector
        this.profilePage.TopSellingList.click();
        this.profilePage.TopSellingCount.waitForDisplayed();
        let TopSelling = this.profilePage.TopSellingCount.getText();
        // Get number how many game in then "Top Rated" sector
        this.profilePage.TopRatedList.click();
        let TopRated = this.profilePage.TopRatedCount.getText();
        // Search the biggest sector into RPG Games
        if (WhatsPopular > TopSelling && WhatsPopular > NewAndTrending) {
            console.log('The biggest part RPG is WhatsPopular sector');
        } else if (TopRated > TopSelling) {
            console.log('TOP RATED is the biggest');
        } else if (TopSelling > NewAndTrending) {
            console.log('Top Selling is the biggest');
        } else {
            console.log('New and Trending');
        }
    });

    it('user should be able add game to cart and remove this one', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
        this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
        // Go to RPG game list
        this.profilePage.GameLnk.moveTo();
        this.profilePage.RPGGamesLnk.click();
        // Click on game 
        browser.waitUntil(() => {
            return this.profilePage.GameTitleListLnk.map((elem) => elem.isExisting()).length > 0;
        });
        this.profilePage.GameTitleListLnk[0].click();
        // Add game to Cart
        this.profilePage.CartAddLnk.waitForDisplayed();
        this.profilePage.CartAddLnk.click(); 
        // verify that it has been added
        this.profilePage.CartGameAddedTxt.getText();
        // Go to homepage trough Continue Shopping button
        this.profilePage.ContinueShoppingLnk.click();
        //Verify that user was redirected to homepage
        this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
        // Go to cart
        this.profilePage.CartLnk.waitForDisplayed();
        this.profilePage.CartLnk.click();
        // Remove game
        
        let gamebefore = this.profilePage.CartPriceForGames.getText();
        this.profilePage.CartRmvLnk.click();
        this.profilePage.GameHasBeenRmvMsg.isExisting();
        let gameafter = this.profilePage.CartPriceForGames.getText();
        // verify that it has been removed
        assert.notEqual(gamebefore, gameafter, 'game was not removed!');
    });

    it('should be able to setting profile', () => {
        browser.url(loginUrl)
        // Type in username, password and click login
        this.loginPage.login();
        // Verify use was logged in by waiting fof profile icon and suggested for you label
        this.loginPage.AccountPulldownLnk.waitForDisplayed(undefined, false, 'Account link was not displayed');
        // Click on profile icon
        this.loginPage.AccountPulldownLnk.click();
        // Go to Profile edit
        this.profilePage.ViewProfileLnk.click();
        this.profilePage.ProfileEditLnk.waitForDisplayed(undefined, false, 'Edit button was not displayed');
        this.profilePage.ProfileEditLnk.click();
        // Type in real name
        this.profilePage.RealNameTxt.setValue('QA Real Name');
        // Save changes

        this.profilePage.Location[0].scrollIntoView();
        this.profilePage.SaveChangesLnk.click();
        // Verify that info was changed trough message text
        this.profilePage.MsgSavedTxt.isExisting();
    });
});
