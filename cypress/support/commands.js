// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//-- This is a parent command --
Cypress.Commands.add('login', (username,email, password) => { 
    
    cy.visit('https://shop.demoqa.com/my-account/');
    cy.wait(5000)
    cy.get('#reg_username').type(username);
    cy.wait(5000)
    cy.get('#reg_email').type(email);
    cy.wait(5000)
    cy.get('#reg_password').type(this.data.Password)
    cy.wait(5000)

})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
