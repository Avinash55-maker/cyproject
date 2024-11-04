class AccountPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }
  
    fillAccountDetails(firstname,lastname,email, password) {
      cy.get('#firstname').type(firstname);
      cy.get('#lastname').type(lastname);
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
    }
  
    submit() {
      cy.get('button.action.submit').click();
    }
  
    signIn(email, password) {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('button.action.login').click();
    }
  }
  
  export default new AccountPage();