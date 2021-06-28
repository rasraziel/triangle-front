describe("Points button clicked",()=>{
    it("Hides the choose input method and brings the points form",()=>{
        cy.visit("/");
        cy.get(".coordinates").click();
        cy.get(".points").should("be.visible");
        cy.get(".sides").should("not.be.visible");
        cy.get(".hiddenContent").should("not.be.visible");
    })
})