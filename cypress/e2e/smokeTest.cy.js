describe("Test suit - homework", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it("Validar logo", () => {
    cy.get(".orangehrm-login-branding > img").should("be.visible");
  });
});
