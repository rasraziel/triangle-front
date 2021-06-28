describe("Calculate button disabled",()=>{
    it("tests if the button is disabled",()=>{
        cy.visit("/");
        cy.get(".sidesBtn").click();
        cy.get(".calcBtn").should("be.disabled");
    });
});