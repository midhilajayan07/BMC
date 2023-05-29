import Supporter from "../../support/PageObjects/Supporter";
//import { And } from 'badeball/cypress-cucumber-preprocessor'
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const signUp = new Supporter();

Given("the user loads url", () => {
    signUp.GetUrl();
   // signUp.Trial()
});

When("new user supports a creator", () => {
    //signUp.Support();
    signUp.AddMemberShip();
});
Then("new supportor account will be created", () => {
 //signUp.Logout();
});
When("the new supportor can login to the application", () => {
   //signUp.Login();
});
Then("the supporter can edit the account details", () => {
 //signUp.ChangePassword()
//signUp.SupportorLogOut()
 //signUp.SupportorLoginWithNewCredentials()
});
