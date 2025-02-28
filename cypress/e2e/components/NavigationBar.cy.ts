describe("Navigation Card Switching Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should switch sections correctly when clicking the right item", () => {
    cy.get('[data-testid="navigation-center"]').as("centerItem");
    cy.get('[data-testid="navigation-left"]').as("leftItem");
    cy.get('[data-testid="navigation-right"]').as("rightItem");
    cy.get("@centerItem").invoke("text").as("initialCenter");
    cy.get("@leftItem").invoke("text").as("initialLeft");
    cy.get("@rightItem").invoke("text").as("initialRight");
    cy.get("@rightItem").click({ multiple: true, force: true });
    cy.get("@centerItem").should("contain", "Functions");
    cy.get("@leftItem").should("contain", "Tests");
    cy.get("@rightItem").should("contain", "Polynoms");
  });
});
