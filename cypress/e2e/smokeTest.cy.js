describe("Test suit - homework", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it("Validar logo", () => {
    cy.get(".orangehrm-login-branding > img").should("be.visible");
  });
  it("Validar username", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label"
    ).should("be.visible");
  });
  it("Validar etiqueta", () => {
    cy.get(".orangehrm-copyright-wrapper > :nth-child(1)").contains(
      "OrangeHRM "
    );
  });
  it("Validar boton", () => {
    cy.get(".oxd-button").should("be.visible");
  });
});
