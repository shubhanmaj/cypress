///<reference types =  "Cypress"/>

describe("My first test suit", () =>{

    it('Test case 01', () => {
        cy.visit('www.google.com')
    });
})