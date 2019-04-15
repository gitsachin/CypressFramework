Cypress.Commands.add('EnterEmail', (loc,data) => {
  cy.get(loc.email_field).type(data.email);
});

Cypress.Commands.add('EnterPassword', (loc,data) => {
  cy.get(loc.password_field).type(data.password);
});

Cypress.Commands.add('ClickSubmitButton', (loc) => {
  cy.wait(2000);
  cy.get(loc.login_button).click();
});

Cypress.Commands.add('EnterInvalidEmail', (loc,data) => {
  cy.get(loc.email_field).type(data.invalid_email);
});
