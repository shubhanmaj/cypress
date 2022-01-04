/// <reference types =  "Cypress"/>

describe("GreenKart test suit 02", ()=>{
    before(()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })


    it('Find th product and add it to the cart', () => {
        cy.get(".search-keyword").type("ca")
        cy.wait(5000)
        cy.get(".products").find(".product").each((element)=>{
            const vegname = element.find(".product-name").text()
        if(vegname.includes("Cashews")){
            cy.wrap(element).find("button").click()
        }
        })
        cy.get(".cart-icon").click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.get(".products").should("be.visible")
        cy.contains("Place Order").click()
        cy.get("button").click()
    });
})