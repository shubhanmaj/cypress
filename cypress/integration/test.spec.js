/// <reference types = "Cypress" />
let randomEmail = parseInt(Math.random()*10)
let email = `myemail${randomEmail}@email.com`
describe("Test suit", ()=>{
    it("Test01", ()=>{
        cy.visit("http://automationpractice.com/index.php")
        cy.get(".login").click()
        cy.get("#email_create").type(email)
        cy.get("#SubmitCreate").click()
        // cy.get("#create_account_error").should("be.visible")
    })
    it("Test02", ()=>{
        cy.get("#uniform-id_gender1").click()
        cy.get("#customer_firstname").type("myFirstName")
        cy.get("#customer_lastname").type("myLastName")
        cy.get("#passwd").type("letsLearnAutomation")
        cy.get("#days").select("10")
        cy.get("#months").select("June")
        cy.get("#years").select("1986")

        cy.get("#firstname").type("myFirstName")
        cy.get("#lastname").type("myLastName")

        cy.get("#address1").type("House no 777")
        cy.get("#city").type("Manhattan")
        cy.get("#id_state").select("New York")
        cy.get("#postcode").type("11001")
        // cy.get("#id_country").select("United States")
        
        cy.get("#phone_mobile").type("5584469988")
        cy.get("#alias").type("Learn")

        cy.get("#submitAccount").click()

        

    })
   
})