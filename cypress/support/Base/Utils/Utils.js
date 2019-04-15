Cypress.Commands.add('ClickonAddButton', (loc) => {
  cy.wait(2000);
  cy.get(loc).click();
});

Cypress.Commands.add('ClickonImportButton', (loc) => {
  cy.wait(2000);
  cy.get(loc).click();
});

Cypress.Commands.add('VerifyDisabled', (loc) => {
  cy.get(loc).should('be.disabled');
});

Cypress.Commands.add('VerifyPage_UsingURL', (PageText) => {
  cy.url().should('contain',PageText);
});

Cypress.Commands.add('VerifyPage_Title', (PageTitle) => {
  cy.title().should('contain',PageTitle);
});

Cypress.Commands.add('ClickUsing_Contains', (data) => {
  cy.contains(data).click();
});

Cypress.Commands.add('VerifyValidationError', (loc,data) => {
  cy.get(loc).should('contain',data);
});

Cypress.Commands.add('VisitDifferent_DomainURL', (Diff_DomainURL) => {
  cy.visit(Diff_DomainURL);
});
