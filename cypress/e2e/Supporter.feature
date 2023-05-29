Feature: Testing on BuyMeACoffee site

Validating Navigation to Supporter Signup/Login
Scenario: Create a new user

Given the user loads url
When new user supports a creator
Then new supportor account will be created

When the new supportor can login to the application
Then the supporter can edit the account details

