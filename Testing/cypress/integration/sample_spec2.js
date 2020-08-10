describe("my Second Test", () => {
  it("visits", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("each").click();

    cy.get(".connectors-each-ul>li").each(function ($el, index, $list) {
      console.log($el, index, $list);
    });
  });
});
