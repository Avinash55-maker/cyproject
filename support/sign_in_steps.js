import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import accountPage from '../../pages/accountPage';

Given('I visit the sign-in page', () => {
  accountPage.visit();
});

When('I enter valid credentials', () => {
  const firstname = "test"
  const lastname = "user"
  const email = 'testuser@example.com'; // Use a valid email created previously.
  const password = 'Password123!';
  accountPage.signIn(firstname, lastname, email, password);
});

Then('I should be redirected to my account dashboard', () => {
  cy.url().should('include', '/customer/account/');
});