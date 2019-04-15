Cypress.Commands.add('OpenRegistrationPage', (loc) => {
  cy.get(loc.registration_page_link).click();
});

Cypress.Commands.add('Verify_EndUserRegistrationForm', (loc) => {
  cy.get(loc.registration_page_EndUserForm).should('be.visible');
});

Cypress.Commands.add('EnterEmail_forRegistration', (loc,data) => {
  cy.get(loc.registrationForm_EmailField).type(data.registrationForm_Email);
});

Cypress.Commands.add('EnterPassword_forRegistration', (loc,data) => {
  cy.get(loc.registrationForm_PasswordField).type(data.registrationForm_Password);
});

Cypress.Commands.add('EnterConfirmPassword_forRegistration', (loc,data) => {
  cy.get(loc.registrationForm_ConfirmPasswordField).type(data.registrationForm_Password);
});

Cypress.Commands.add('Submit_EndUserFormRegistration', (loc) => {
  cy.get(loc.registrationForm_SubmitButton).click();
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
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
    .find('a')
    .should('have.attr', 'href')
    .then((href) => {
      cy.visit(href)
    })
  })
});
