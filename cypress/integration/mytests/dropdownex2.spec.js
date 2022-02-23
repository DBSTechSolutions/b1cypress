/// <reference types="cypress" />

describe("select box", () => {

    it("should load website with selectbox", () => {
      
        Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });

      cy.visit("https://chercher.tech/practice/dropdowns");
      cy.get("#order-changed").select("Yahoo");
    });
    
  });