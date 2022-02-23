/// <reference types="cypress" />

describe('file upload test', ()=>{

    it('test', ()=>{
        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('[name=upfile]').attachFile("Desktop.jpeg") 
        cy.get('[value=Press]').click()
    })
})