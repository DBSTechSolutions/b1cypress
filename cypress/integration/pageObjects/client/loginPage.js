class loginPage {

    loginwithCoreectCreds() {

        cy.xpath(this.username()).type("Admin");
        cy.get(this.password()).type("admin123");
        cy.get(this.loignBtn()).click({ force: true });
        cy.wait(6000);
    }

    loginwithIncorrectCreds() {

        cy.xpath(this.username()).type("sdbsadk");
        cy.get(this.password()).type("admin123");
        cy.get(this.loignBtn()).click({ force: true });
        cy.wait(6000);
    }
    username() {

        return "//input[@id='txtUsername']";
    }

    password() {

        return "#txtPassword";
    }

    loignBtn() {

        return "#btnLogin";
    }
}
export default loginPage