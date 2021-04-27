describe('App page opens', ()=>{
    it('Renders correctly', ()=>{
        cy.visit("/");
        cy.get(".points").should("not.be.visible");
        cy.get(".sides").should("not.be.visible");
        cy.get(".hiddenContent").should("be.visible");
    })
})