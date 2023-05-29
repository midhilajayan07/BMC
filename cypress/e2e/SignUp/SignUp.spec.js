import SignUp from "../../support/PageObjects/SignUp";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const signUp = new SignUp();

Given("the user loads the Domain url", () => {
  signUp.GetUrl();
});

When("user creates a new creator account", () => {
  signUp.SignUp();
  signUp.AddToken();
  signUp.CreateProfile();
});

Then("new creator can login to the application and edit profile details", () => {
  signUp.LogoutFromTheAccount();
  signUp.LoginToTheAccount();
  signUp.EditPage();
});
