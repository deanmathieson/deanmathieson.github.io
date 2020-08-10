describe("my First Test", () => {
  it("visits", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get("#couponCode1").type("test").should("have.value", "test");
    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted");

    cy.get(".action-focus")
      .focus()
      .should("have.class", "focus")
      .prev()
      .should("have.attr", "style", "color: orange;");

    cy.get(".action-blur")
      .type("About to blur")
      .blur()
      .should("have.class", "error")
      .prev()
      .should("have.attr", "style", "color: red;");

    cy.get(".action-clear")
      .type("clear this")
      .should("have.value", "clear this")
      .clear()
      .should("have.value", "");

    cy.get(".action-btn").click();
    cy.get(".popover").should("be.visible");

    cy.get(".action-div").dblclick().should("not.be.visible");
    cy.get(".action-input-hidden")
      .should("be.visible")
      .clear()
      .type("typing test")
      .should("have.value", "typing test");
  });
});
