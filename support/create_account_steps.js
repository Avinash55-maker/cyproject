import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import accountPage from '../pages/accountPage';

Given('I visit the create account page', () => {
  accountPage.visit();
});

When('I fill in my account details with valid information', () => {
  const email = `testuser${Date.now()}@example.com`;
  const password = 'Password123!';
  accountPage.fillAccountDetails(email, password);
});

When('I submit the form', () => {
  accountPage.submit();
});

Then('I should see a success message', () => {
  cy.contains('Thank you for registering with Fake Online Clothing Store.').should('be.visible');
});