describe("BigCard Activation Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("activates a card when the button is clicked", () => {
    cy.get("[data-test=big-card]").first().as("firstCard");
    cy.get("@firstCard")
      .within(() => {
        cy.get("[data-test=big-card-button]").click();

        cy.get("[data-test=checkmark]").should("be.visible");
      })
      .then(() => {
        cy.get("@firstCard").should(
          "have.class",
          "bg-gradient-to-b from-[#6FB2B8] to-[#FFECD4]"
        );
      });
  });

  it("inactivates a card when the button is clicked", () => {
    cy.get("[data-test=big-card]").first().as("firstCard");
    cy.get("@firstCard")
      .within(() => {
        cy.get("[data-test=big-card-button]").click();

        cy.get("[data-test=checkmark]").should("be.visible");
      })
      .then(() => {
        cy.get("@firstCard").should(
          "have.class",
          "bg-gradient-to-b from-[#6FB2B8] to-[#FFECD4]"
        );
      });

    cy.get("@firstCard")
      .within(() => {
        cy.get("[data-test=big-card-button]").click();

        cy.get("[data-test=checkmark]").should("not.be.visible");
      })
      .then(() => {
        cy.get("@firstCard").should(
          "not.have.class",
          "bg-gradient-to-b from-[#6FB2B8] to-[#FFECD4]"
        );
      });
  });
});
