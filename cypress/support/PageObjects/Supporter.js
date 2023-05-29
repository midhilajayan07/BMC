class Supporter {
    ClickSignUpButton(){
        this.getSignUp().click();
    }
    Support(){
      this.getAddButton().click()
      this.getNameField().type("Anju")
      this.getMessageField().type("Wish To Support")
      this.getSupportButton().click();
      this.getEmailField().type("anjuaneesh@gmail.com");
      this.getPaymentDetails().type("Anju Ann")
      this.Card()
      this.getPayButton().click();
      cy.wait(10000)
      this.getCloseIcon().click()}
      Logout(){
      this.getProfilemenu().click();
      this.getLogout().click()
      }
      Login(){
      this.getLoginButton().click();
      this.getLoginEmail().type("anjuaneesh@gmail.com")
      this.getLogin().click();
      this.getOtp().last().type("111111");
      //cy.wait(10000); //to manage the delay in loading page to prevent skip/crash
      this.getContinueWithEmailButton().click();
      }
      ChangePassword(){
      this.getMyAccount().click();
      this.getNewPassword().type("midhila@123M")
      this.getConfirmPassword().type("midhila@123M")
      this.getSaveChangesButton().click();
      }
      SupportorLogOut(){
      this.getSupporterProfileMenu().click();
      this.getSupporterLogoutButton().click()
      }
      SupportorLoginWithNewCredentials(){
      this.getLoginButton().click();
      this.getLoginEmail().type("anjuaneesh@gmail.com")
      this.getLogin().click();
      this.getPassword().type("midhila@123M")
      this.getLogin().click();
      this.getMyAccount().click();
      this.UploadProfilePicture()
      this.getNewPassword().type("midhirla@123M")
      this.getConfirmPassword().type("midhirla@123M")
      this.getSaveChangesButton().click();
      
    }
    Card(){
//      cy.getIframe('iframe').click({ force: true }).type('4242424242424242')
// cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242');
//cy.wait(10000)
// cy.getWithinIframe('[name="cardnumber"]').click();
// cy.wait(1000)
cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242');
        cy.getWithinIframe('[name="exp-date"]').type('0234');
        cy.getWithinIframe('[name="cvc"]').type('223');
        cy.getWithinIframe('[name="postal"]').type('94111');

    }
    CardM(){
      //      cy.getIframe('iframe').click({ force: true }).type('4242424242424242')
      // cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242');
      //cy.wait(10000)
      // cy.getWithinIframe('[name="cardnumber"]').click();
      // cy.wait(1000)
      cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242');
              cy.getWithinIframe('[name="exp-date"]').type('0234');
              cy.getWithinIframe('[name="cvc"]').type('223');
              cy.getWithinIframe('[name="postal"]').type('94111');
      
          }
    Trial(){
      cy.visit("https://rose.buymeacoffee.com/my-account/edit-profile")
    }
    // SignUp() {
    //   this.getSignUp().click();
    //   this.getAddEmailId().type("a89890@gmail.com");
    //   //this.getAddUserName().type("anjali123");
    //   this.getAddPasswordfield().type("anjali@123M123");
    //   this.getContinueWithEmailButton().click();
    //   //cy.wait(10000); // to manage the delay in loading page to prevent skip/crash
    // }
    // AddToken() {
    //   this.getOtp().last().type("111111");
    //   //cy.wait(10000); //to manage the delay in loading page to prevent skip/crash
    //   this.getContinueWithEmailButton().click();
    // }
    // CreateProfile() {
    //   this.addUserName().type("Micdhilaja");
    //   this.addBio().type("forfun");
    //   //this.addCountry().select("India");
    //   this.UploadProfilePicture();
    //   this.getlink().type("https://staging.giftapp.com/setup-profile");
    //   this.getContinueButton().click();
    //   this.clickContinueButton().click();
    //   this.getProfileWork().type("Music");
    //   this.getSaveButton().click();
    //   this.getCloseIcon().click();
    // }
    // AddAWishListItem() {
    //   this.addWish().click();
    //   this.addTitle().type("My Wish");
    //   this.addPrice().type("1");
    //   this.getWishAddButton().click();
    //   cy.wait(10000); //to manage the delay in loading page to prevent skip/crash
    // }
    // LogoutFromTheAccount() {
    //   this.getProfilemenu().last().click();
    //   this.clickLogOut().click();
    // }
    // LoginToTheAccount() {
    //   this.GetUrl();
    //   this.getLoginButton().click();
    //   this.addUser().type("a89890@gmail.com");
    //   this.addLoginButton().click()
    //   this.addLoginPassword().type("anjali@123M123");
    //   this.addLoginButton().click();
      
    // }
    UploadProfilePicture() {
      const filepath = "smile.jpeg";
      this.getUploadProfilePicButton().click({force: true});
  
      this.getPrimaryInputFile()
      .not('[style="display: none;"]')
        .attachFile(filepath)
        
        // .then(() => {
        //   cy.wait(1000); // to manage the delay in loading page to prevent skip/crash
        // }
        , { force: true };
    }
    getSignUp(){
      return cy.get('.m-l-24 > .p-absolute')
    }
    getAddEmailId() {
      return cy.get("#signup-email");
    }
    addUser() {
      return cy.get('#login-email')
    }
    getContinueWithEmailButton(){
      return cy.get('#login-btn')
    }
    getOtp(){
      return cy.get('#login-otp')
    }
    loginurl() {
      cy.visit("https://staging.giftapp.com/login");
    }
    addLogin() {
      return cy.get("form > .transition");
    }
    getContinueButton() {
      return cy.get('#save-userdata')
    }
    clickContinueButton(){
      return cy.get('#setAsDefault')
    }
    getProfileWork(){
      return cy.get('#profile_work')
    }
    getSaveButton(){
      return cy.get('#edit-page-submit')
    }
    //getCloseIcon(){
    //  return cy.get('#openShareModal > .xs-modal-footer > .modal-content > .p-absolute')
    //}
    getProfilemenu() {
      return cy.get('.xs-backdrop-hidden > .mg-l-12')
    }
    // getLoginButton(){
    //   return cy.get('.m-l-16');
    // }
    addLoginPassword(){
      return cy.get('#login-password')
    }
    getWishAddButton() {
      return cy.get(".mt-12 > .justify-center > .inline-flex");
    }
    addWish() {
      return cy.xpath(
        "//div/div[2]/div/div[5]/div/div/div[2]/div[1]/div[1]/div[3]/div/button/span"
      );
    }
    addPrice() {
      return cy.get("#price");
    }
    addTitle() {
      return cy.get("#title");
    }
    clickLogOut() {
      return cy.get('.br-top-1px-dark-op-l > .flex')
    }
  
    getPrimaryInputFile() {
      return cy.xpath("//input[@type='file']").first();
    }
    addBio() {
      return cy.get('#signup-about')
    }
    addCountry() {
      return cy.get(":nth-child(5) > .w-full");
    }
    getlink() {
      return cy.get('#signup-website')
    }
  
    getAddUserName() {
      return cy.get("#username");
    }
    getAddPasswordfield() {
      return cy.get('#signup-password')
    }
    getSignUpButton() {
      return cy.xpath("//span[contains(text(), ' Sign up ')]");
    }
    getUploadProfilePicButton() {
      return cy.get('#profile-image').not('[style="display: none;"]')
    }
    addUserName() {
      return cy.get('#signup-name')
    }
    addLoginButton(){
      return cy.get('#login-btn')
    }
    getVerifyButton() {
      return cy.xpath("//div/div[2]/div/div/button/span");
    }
    getTokenField1() {
      return cy.get("#otp-1");
    }
    getTokenField2() {
      return cy.get("#otp-2");
    }
    getTokenField3() {
      return cy.get("#otp-3");
    }
    getTokenField4() {
      return cy.get("#otp-4");
    }
    getTokenField5() {
      return cy.get("#otp-5");
    }
    getTokenField6() {
      return cy.get("#otp-6");
    }
  getAddButton(){
    return cy.get('.tw-h-12 > .tw-cursor-pointer')
  }
  getNameField(){
    return cy.get('#otV1Name')
  }
  getMessageField(){
    return cy.get('#otV1Msg > .emojionearea')
  }
  getSupportButton(){
    return cy.get('#gotoCardScreen')
  }
  getEmailField(){
    return cy.get('#onetime-v1-email')
  }
  getPaymentDetails(){
    return cy.get('#onetime-v1-name-on-card')
  }
  getCardDetails(){
    return cy.get('.onetimeV1CardWrapper')
    
  }
  getPayButton(){
    return cy.get('fieldset > .ctr-bmc-btn-v2')
  }
  getCloseIcon(){
    return cy.get('#close-thankyou')
  }
  getLogin(){
    return cy.get('#login-btn')
  }
  getLoginEmail(){
    return cy.get('#login-email')
  }
  getLoginButton(){
    return cy.get('.m-l-16')
  }
  getLogout(){
    return cy.get('.br-top-1px-dark-op-l > .flex')
  }
  getMyAccount(){
    return cy.get('.sidebar-items > :nth-child(2) > .p-absolute')
  }
    GetUrl() {
       cy.visit("https://rose.buymeacoffee.com/midhila");
    }
    // GetUrl() {
    //   cy.visit("https://rose.buymeacoffee.com/login");
    // }
    getProfileImage(){
      return 
    }
    getNewPassword(){
      return cy.get('#new-password')
    }
    getConfirmPassword(){
      return cy.get('#confirm-password')
    }
    getSaveChangesButton(){
      return cy.get('.pd-32 > .bmc-btn-primary')
    }
    getSupporterProfileMenu(){
      return cy.get('.dashboard-dropdown > .flex-shrink-0')
    }
    getSupporterLogoutButton(){
      return cy.get('.br-top-1px-dark-op-l > .flex')
    }
    getPassword(){
      return cy.get('#login-password')
    }
    getMemberShipTab(){
      return cy.get('.support-widget-holder > .br-r-pay-widget > .radio-options > .monthly-radio-label > .hidden-radio-btn')
    }
    getLevel(){
      return cy.get('.support-widget-holder > .br-r-pay-widget > .active-option-wrapper > .monthly-radio-area > .p-b-5 > :nth-child(1) > :nth-child(1) > .text-center > .p-relative > .level-pay-btn')
    }
    getSupportEmail(){
      return cy.get('#modal-widget > .br-r-pay-widget > .cp-pay-form > .email-name-for-mem > .m-t-32 > .support-email')
    }
    getSupporterName(){
      return cy.get('#modal-widget > .br-r-pay-widget > .cp-pay-form > .email-name-for-mem > .name-for-mem > .anonymous_mem_name')
    }
    getSupporterMessage(){
      return cy.get('#modal-widget > .br-r-pay-widget > .cp-pay-form > .cp-emoji-picker-top > #support_msg > .emojionearea > .emojionearea-editor')
    }
    getJoinMemberShip(){
      return cy.get('#modal-widget > .br-r-pay-widget > .cp-pay-form > .row > .m-t-20 > .col-xs-12 > .open-pay-modal')
    }
    addAmount(){
      return cy.get('.bmc-modal-header-padd > .pwyw-container > .br-r-4')
    }
    AddMemberShip(){
      this.getMemberShipTab().click();
      this.getLevel().click()
      this.getSupportEmail().type("aiwin@gmail.com")
      this.getSupporterName().type("Aiwin")
      this.getSupporterMessage().type("getting membership")
      this.getJoinMemberShip().click()
      this.addAmount().type("6")
      this.CardM()
      this.getPayButton().click();
      cy.wait(10000)
      this.getCloseIcon().click()
    }
  }
  export default Supporter;