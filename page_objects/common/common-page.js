"use strict";
class Common {
    // Landing page
    get NotNowLnk() {return $('button=Not Now');}
    get SuggestedForYouLbl() {return $('h4=Suggestions For You');}
    
    //Header
    get ProfileIconLnk() {return $('[aria-label="Profile"]');}
    disableWelcomePopup(){
        this.NotNowLnk.waitForDisplayed(20000, false, 'Not now modal was not displayed');
        this.NotNowLnk.click();
    }
}
module.exports = Common;