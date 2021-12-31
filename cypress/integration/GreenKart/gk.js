///<reference types =  "Cypress"/>

describe("GreenKart Test Suite", () => {

beforeEach(() =>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
})
    it('Visit url Greenkart website', () => {
        //type ca in the search field and it should display 4 items that starts with "ca"
        cy.get(".search-keyword").type("ca")
        cy.get(".product:visible").should("have.length", 4)
        cy.get(".products").find(".product").eq(0).contains("ADD TO CART").click()
    });
    it('Using of console log vs cy log', () => {
        cy.get(".products").find(".product").each(element=>{
        console.log("script finished")
            
        })
    });
    it('Find the desired string from an array',() => {
        cy.get(".search-keyword").type("ca")
        cy.get(".products").find(".product").each((element)=> {
           const vegName = element.find(".product-name").text()

           if(vegName.includes("Carrot")){
               cy.wrap(element).find("button").click()
           }
        })
    });
    it("Get text using then method for non-cypress promise", ()=>{
        cy.get(".brand").then((textElement)=> {
            const brandName = textElement.text()
            if (brandName === "GREENKRT") {
            cy.get(".search-keyword").type("ca")
            }else{
            cy.get(".search-keyword").type("Cashews")

            }
        })
    })
    //Assertion 
    it.only('Assert the brand name using mocha/chai', () => {
    cy.get(".brand").should("have.text", "GREENKART")
        
    });
})