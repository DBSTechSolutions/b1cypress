///<reference types="cypress"/>

import loginPage from '../pageObjects/client/loginPage';

const login = new loginPage();

describe('Validate Orange HRM', () => {

    it('Validate login with correct Credentials ', () => {

        cy.visit(Cypress.env('adminUrl'));
        login.loginwithCoreectCreds();
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');
        // or
        cy.location('href').should('include', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        //or
        cy.location().its('href').should('include', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')

    })

    it('Validate login with incorrect Username ', () => {

        cy.visit(Cypress.env('clientUrl'));
        login.loginwithIncorrectCreds();
        cy.get("#spanMessage").should('be.visible');

    })
})

//module or feature

//15 test cases

//decribe or context
//it or specify

//Why -- Page Object Model 
