/// <reference types =  "Cypress"/>

describe("Cypress JQuery Suite", ()=>{
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it('Handle the alert pop-ups', () => {
        cy.get("#alertbtn").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.get("#confirmbtn").click()
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
    });
    it("Remove the attribute from the DOM so that the page doesn't open in the new tab", () => {
        cy.get("#opentab").invoke("removeAttr", "target").click()
        cy.url().should("include", "rahulshettyacademy") //validate the url of the website
        cy.go("back")
    });
    it.skip("Remove the attribute from the DOM so that the page doesn't open new window", ()=>{
        cy.get("#openwindow").invoke("removeAttr", "onclick").click() //cypress doesn't handle window handle
    })
})
