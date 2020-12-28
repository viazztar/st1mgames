"use strict";
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get LoginPageBox() {return $('[class="loginbox"]');}
    get usernameTxt() { return $('[id="input_username"]'); }
    get PasswordTxt() {return $('[id="input_password"]');}
    get LoginLnk() {return $('span=Sign In');}
    get AccountPulldownLnk() {return $('[id="account_pulldown"]');}
    get LogoutLnk() {return $('[href="javascript:Logout();"]');}
    get HomepageLoginLnk() {return $('[class="global_action_link"]');}
    get ErrorMsg() {return $('[id="error_display"]');}

    // Helper method to avoid code duplication default par    
    login(username = 'different_stv', password = 'passforqa'){
        // login(username = "Slava+"randomNumber()+"gmail.com", password = 'different_qa'){
        this.usernameTxt.setValue(username);
        this.PasswordTxt.setValue(password);
        this.LoginLnk.click();
    }
    loginIncorrectPassword(username = 'different_stv', password = 'passforqa'){
        this.usernameTxt.setValue(username);
        this.PasswordTxt.setValue(password);
        this.LoginLnk.click();
    }
}
module.exports = Login;



