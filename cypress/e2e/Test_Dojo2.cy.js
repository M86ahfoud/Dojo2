import { faker } from "@faker-js/faker";

describe('template spec', () => {
  it('passes', () => { 
   
    cy.intercept({
      url: "https://api.demoblaze.com/entries",
      method: 'GET',
    }).as('getEntries');
    cy.intercept({
      url: "https://api.demoblaze.com/signup",
      method: 'POST',
    }).as('waitSignUp');
    cy.intercept({
      url: "https://api.demoblaze.com/login",
      method: 'GET',
    }).as('waitLogin')
    cy.visit('https://www.demoblaze.com/');
    

    cy.get('#signin2').click();
    
    cy.wait(2000)
    cy.get('#sign-username' ).type(faker.internet.userName());
    cy.wait(2000);
    
    cy.get('#sign-password').type(faker.internet.password());
    cy.wait(2000);
    cy.get('#signInModal').find('.btn-primary').click();
    
    cy.get('#login2').click();
    cy.wait(2000);
    cy.get('#loginusername').type('Dodjk2');
    cy.wait(2000);
    cy.get('#loginpassword').type('Dodjk2');
    cy.wait(2000);
    cy.get('#logInModal').find('.btn-primary').click();
    cy.wait(2000);
    cy.get('#tbodyid >.col-lg-4.col-md-6.mb-4:nth-child(1)>.card.h-100>a').click();
    cy.get('#tbodyid').find('.btn-success').click();
    cy.get('#cartur').click();
    cy.wait(2000);
    cy.get('.btn.btn-success').click();
    cy.get('#name').type(faker.internet.userName());
    cy.get('#country').type(faker.address.country());
    cy.get('#city').type(faker.address.cityName());
    cy.get('#card').type(faker.finance.creditCardNumber('####-####-####-###L'));
    cy.get('#month').type(faker.date.month());
    cy.get('#year').type('2004');
    cy.get('#orderModal').find('.btn.btn-primary').click();
    cy.wait(2000);
    cy.get('.confirm.btn.btn-lg.btn-primary').click();
  })

})