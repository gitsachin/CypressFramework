Cypress.Commands.add('ClickForgotLink', (loc,data) => {
  cy.wait(1000);
  cy.get(loc.forgot_link).click();
});

Cypress.Commands.add('EnterEmail', (loc,data) => {
  cy.get(loc.email_field).type(data);
});

Cypress.Commands.add('ClickEmailbutton', (loc,data) => {
  cy.get(loc.email_button).click();
  cy.get(loc.confirm_email_page).should('contain',data);
});

Cypress.Commands.add('EnterEmail_onMailinatorInputField', (loc,data) => {
  cy.get(loc.mailinatorPage_InputField).type(data.registrationForm_Email);
  cy.get(loc.mailinatorPage_InputField).type('{enter}');
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
});

Cypress.Commands.add('ClickonRecentEmail', (loc) => {
  cy.get(loc.email_texts).eq(3).click();
});

Cypress.Commands.add('ClickonConfirmEmail', () => {
  cy.get('iframe#msg_body')
  .then(function ($iframe) {
    const $body = $iframe.contents().find('html')
    cy
    .wrap($body).find('> body')
    .invoke('text').then((yourDivText) => {
      cy.log(yourDivText);
    })

    cy
    .wrap($body)
    .find('a').click();
  })
});

Cypress.Commands.add('EnterPassword', (loc,data) => {
  cy.get(loc.password_field).type(data);
});

Cypress.Command.add('EnterConfirmedPassword', (loc,data) => {
  cy.get(loc.confirmed_password_field).type(data);
});

Cypress.Command.add('ClickResetbutton', (loc) => {
  cy.get(loc.reset_button).click();
});
