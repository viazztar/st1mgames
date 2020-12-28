"use strict";
class Common {

    get ViewProfileLnk() { return $('a=View profile'); }
    get ProfileEditLnk() { return $('[class="btn_profile_action btn_medium"]'); }
    get RealNameTxt() { return $('[name="real_name"]'); }
    get SaveChangesLnk() { return $('[type="submit"]'); }
    get MsgSavedTxt() { return $('[class="saved_changes_msg"]'); }
    get GameLnk() { return $('[id="genre_tab"]'); }
    get BrowseByPlatformMacOSX() { return $('a=Mac OS X'); }
    get GamesMacOSLnk() { return $$('[class="tab_item   app_impression_tracked" ]'); }
    get TabGames() { return $('[id="tab_select_NewReleases"]'); }
    get MacOSImg() { return $('[class="platform_img mac"]'); }
    get RPGGamesLnk() { return $('[href="https://store.steampowered.com/tags/en/RPG/?snr=1_4_661__12"]'); }
    get ListOfRPGGamesLnk() { return $$('[class="tab_item_name"]'); }
    get WhatsPopularList() { return $('[id="tab_select_ConcurrentUsers"]'); }
    get TopSellingList() { return $('[id="tab_select_TopSellers"]'); }
    get NewAndTrendingList() { return $('[id="tab_select_NewReleases"]'); }
    get TopRatedList() { return $('[id="tab_select_TopRated"]'); }
    get WhatsPopularCount() { return $('[id="NewReleases_total"]'); }
    get TopSellingCount() { return $('[id="TopSellers_total"]'); }
    get NewAndTrendingCount() { return $('[id="NewReleases_total"]'); }
    get TopRatedCount() { return $('[id="TopRated_total"]'); }
    get SpecialButtonLnk() { return $('[href="https://store.steampowered.com/search/?specials=1&snr=1_4_4__146"]'); }
    get GameTitleListLnk() { return $$('[class="title"]'); }
    get CartGameAddedTxt() { return $("div=YOUR ITEM'S BEEN ADDED!"); }
    get CartLnk() { return $('[id="cart_link"]'); }
    get CartAddLnk() { return $('span=Add to Cart'); }
    get CartPurchaseMyself() { return $('[id="btn_purchase_self"]'); }
    get CartRmvLnk() { return $('[class="remove_link"]'); }
    get GameHasBeenRmvMsg() { return $('[class="cart_status_message"]'); }
    get ContinueShoppingLnk() { return $('[class="btn_medium btnv6_blue_hoverfade"]'); }
    get CartPriceForGames() { return $('[id="cart_estimated_total"]'); }
    get Location() { return $$(' [data-name="Layer 1"]'); }

    // Helper method to avoid code duplication
    LocationLosAngeles() {
        this.countryS[1].click();
        $('[value="US"]').click();
        this.countryS[2].click();
        $('[value="California"]').click();
        this.countryS[3].click();
        $('[value="California"]').click();
    }
}
module.exports = Common;