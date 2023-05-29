class SignUp {
    ClickSignUpButton(){
        this.getSignUp().click();
    }
    SignUp() {
      this.getSignUp().click();
      this.getAddEmailId().type("aiwin2@gmail.com");
      //this.getAddUserName().type("anjali123");
      this.getAddPasswordfield().type("anjali@123M123");
      this.getContinueWithEmailButton().click();
      //cy.wait(10000); // to manage the delay in loading page to prevent skip/crash
    }
    AddToken() {
      this.getOtp().last().type("111111");
      //cy.wait(10000); //to manage the delay in loading page to prevent skip/crash
      this.getContinueWithEmailButton().click();
    }
    CreateProfile() {
      this.addUserName().type("Micdhilaja");
      this.addBio().type("forfun");
      this.UploadProfilePicture();
      this.getlink().type("https://staging.giftapp.com/setup-profile");
      this.getContinueButton().click();
      this.clickContinueButton().click();
      this.getProfileWork().type("Music");
      this.getSaveButton().click();
      this.getCloseIcon().click();
    }
    AddAWishListItem() {
      this.addWish().click();
      this.addTitle().type("My Wish");
      this.addPrice().type("1");
      this.getWishAddButton().click();
      cy.wait(10000); //to manage the delay in loading page to prevent skip/crash
    }
    LogoutFromTheAccount() {
      this.getProfilemenu().last().click();
      this.clickLogOut().click();
    }
    LoginToTheAccount() {
      this.GetUrl();
      this.getLoginButton().click();
      this.addUser().type("aiwin2@gmail.com");
      this.addLoginButton().click()
      this.addLoginPassword().type("anjali@123M123");
      this.addLoginButton().click();
    }
    EditPage(){
      this.getCloseModal().click()
      this.getProfileList().last().click();
      this.grtMyProfilePage().click();
      //this.getViewPage().click();
      this.AddCoverPage();
      this.getSaveChangesButton().click();
      //this.getProfileList().last().click();
      this.getEditPage().click();
      this.getAddVideo().type("https://youtu.be/aIIEI33EUqI");
      cy.wait(10000)
      this.addFullName().first().clear().type("Midhila");
      this.addFullName().eq(1).clear().type("Coffee");
      this.addFullName().eq(2).clear().type("Fun Limited");
      //this.addFullName().eq(3).type("https://youtu.be/aIIEI33EUqI");
     
     // this.addFullName().eq(5).clear().type("Interest");
     // this.addFullName().eq(6).clear().type("Interest");
     
     //this.addFullName().eq(3).clear().type("https://en.wikipedia.org/wiki/Rabbit");
     this.getEditPageSave().click();
    }
    UploadProfilePicture() {
      const filepath = "smile.jpeg";
      this.getUploadProfilePicButton().click();
  
      this.getPrimaryInputFile()
        .attachFile(filepath)
        .then(() => {
          console.log("hi");
          cy.wait(1000); // to manage the delay in loading page to prevent skip/crash
        });
    }
    AddCoverPage() {
      const filepath = "coverpage.jpg";
      this.getCoverPagebutton().click();
  
      this.getAddImage()
        .attachFile(filepath)
        .then(() => {
          cy.wait(1000); // to manage the delay in loading page to prevent skip/crash
        });
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
      return cy.get('#signup-btn')
    }
    getOtp(){
      return cy.get('#signup-otp')
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
    getCloseIcon(){
      return cy.get('#openShareModal > .xs-modal-footer > .modal-content > .p-absolute')
    }
    getProfilemenu() {
      return cy.get('.xs-backdrop-hidden > .mg-l-12')
    }
    getLoginButton(){
      return cy.get('.m-l-16');
    }
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
    getAddImage(){
      return cy.get("#coverImgUpload")
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
      return cy.get('.profile-pic-up-wrap')
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
  
    GetUrl() {
      cy.visit("https://dev-v2.buymeacoffee.com/");
    }
    getViewPage(){
      return cy.get('.sidebar-items > :nth-child(2) > .p-absolute')
    }
    getCloseModal(){
      return cy.get('.closeModal')
    }
    grtMyProfilePage(){
      return cy.get('.hidden-xs > .dropdown-menu > :nth-child(1) > .flex')
    }
    getProfileList(){
      return cy.get('.dashboard-dropdown > .flex-shrink-0')
    }
    getCoverPagebutton(){
      return cy.get('.cover-img-add-wrap > .ctr-bmc-btn-v2')
    }
    getSaveChangesButton(){
      return cy.get('#cover_crop_done_btn');
    }
    getEditPage(){
      return cy.get('.flex-r > .mg-r-12')
    }
    addFullName(){
      return cy.xpath("//div[contains(@class, 'w-100 tw-mt-0.5')]");
    }
    getEditPageSave(){
      return cy.get('#edit-page-submit')
    }
    getAddVideo(){
      return cy.get('#featured-video-url')
    }
  }
  export default SignUp;