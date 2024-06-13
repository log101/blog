describe("Home", () =>
  it("titles are correct", () => {
    const page = cy.visit("http://localhost:4321");

    page.get("title").should("have.text", "log101");
    page.get("h1").should("have.text", "Log101");
  }));
