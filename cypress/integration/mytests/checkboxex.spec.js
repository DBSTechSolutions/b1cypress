describe('checkbox Test', function () {
    // test case
    it('Test Case2', function (){
       cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
       // checking by values
       cy.get('input[type="checkbox"]')
       .check(['Manual Tester','Automation Tester']);
       // unchecking all values
       cy.get('input[type="checkbox"]').uncheck();
       // checking and assertion combined with and()
       cy.get('input[value="Automation Tester"]')
       .check().should('be.checked').and('have.value','Automation Tester');
       // unchecking and assertion combined with and()
       cy.get('input[value="Automation Tester"]')
       .uncheck().should('not.be.checked');
    });
 });