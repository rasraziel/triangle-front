describe("Sides button clicked",()=>{
    it("Hides the choose input method and brings the sides form",()=>{
        cy.visit("/");
        cy.get(".sidesBtn").click();
        cy.get(".points").should("not.be.visible");
        cy.get(".sides").should("be.visible");
        cy.get(".hiddenContent").should("not.be.visible");
    })
})