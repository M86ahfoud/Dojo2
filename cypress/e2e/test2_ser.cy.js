import { faker } from '@faker-js/faker';

describe("Suite de test de vérification de la fonctionnalité de création d'utilisateur", () => {
    it('Ok', () => {
        let userName = "Sami999";
        let password = "Sami999";

        cy.intercept('GET', 'https://www.demoblaze.com/');
        cy.visit('https://www.demoblaze.com/');
        cy.get('#signin2').click();
        cy.wait(1000);
        cy.get('#sign-username').type(userName);
        cy.get('#sign-password').type(password);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    })
})

describe("Suite de test de vérification de la fonctionnalité de connexion", () => {
    it('Ok', () => {
        cy.intercept({
            url: 'https://api.demoblaze.com/entries',
            method: 'GET'
        }).as('waitEntries')
        cy.intercept('https://api.demoblaze.com/entries').as('getEntries');
        let userName = "Sami999";
        let password = "Sami999";
        cy.intercept('GET', 'https://www.demoblaze.com/');
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.wait(2000);
        cy.get('#loginusername').type(userName);
        cy.wait(2000);
        cy.get('#loginpassword').type(password);
        cy.get('#logInModal').find('.btn-primary').click();
    })
})

describe("Suite de test de vérification de la fonctionnalité d'ajout de produit au panier", () => {
    it('Ok', () => {
        cy.intercept({
            url: 'https://api.demoblaze.com/entries',
            method: 'GET'
        }).as('waitEntries')
        cy.intercept('https://api.demoblaze.com/entries').as('getEntries');

        let userName = "Sami999";
        let password = "Sami999";
        cy.intercept('GET', 'https://www.demoblaze.com/');
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.wait(2000);
        cy.get('#loginusername').type(userName);
        cy.wait(2000);
        cy.get('#loginpassword').type(password);
        cy.get('#logInModal').find('.btn-primary').click();
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
    })
})

describe("Suite de test de vérification de la fonctionnalité de paiement", () => {
    it('Ok', () => {
        cy.intercept({
            url: 'https://api.demoblaze.com/entries',
            method: 'GET'
        }).as('waitLogin');
        cy.intercept('https://api.demoblaze.com/entries').as('getEntries');

        let userName = "Sami999";
        let password = "Sami999";
        cy.intercept('GET', 'https://www.demoblaze.com/');
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.wait(2000);
        cy.get('#loginusername').type(userName);
        cy.wait(2000);
        cy.get('#loginpassword').type(password);
        cy.get('#logInModal').find('.btn-primary').click();
        cy.intercept({
            url: 'https://api.demoblaze.com/addtocart',
            method: 'POST'
        }).as('waitAddToCart');
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type(faker.name.firstName());
        cy.get('#country').type(faker.address.county());
        cy.get('#city').type(faker.address.cityName());
        cy.get('#card').type(faker.datatype.number(99999));
        cy.get('#month').type(faker.date.month());
        cy.get('#year').type(faker.datatype.number({ min: 2022, max: 2023 }));
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.confirm').click();
    })
})