describe("Collapsible Card Toggle Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should toggle the expanded text when clicking the button", () => {
    cy.contains("Read More").as("toggleButton");
    cy.get('[data-collapse="collapse"]').should("have.css", "max-height", "120px");
    cy.get('[data-test="collapsible-card-toggle"]').click();
    cy.get('[data-collapse="collapse"]')
      .should("have.css", "max-height")
      .and("not.eq", "120px");
    cy.get('[data-test="collapsible-card-toggle"]').contains("Read Less");
    cy.get('[data-test="collapsible-card-toggle"]').click();
    cy.get('[data-collapse="collapse"]').should("have.css", "max-height", "120px");
    cy.get('[data-test="collapsible-card-toggle"]').contains("Read More");
  });
});
