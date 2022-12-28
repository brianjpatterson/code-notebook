describe("The Home Page", () => {
  it("Test Add Snippet Feature", () => {
    cy.visit("/");
    cy.get(".titleInput").type("Test Title");
    cy.get(".contentInput").type("Test Content");
    cy.contains("Add Snippet").click();
    cy.get(".card-title").should("have.text", "Test Title");
  });
});
