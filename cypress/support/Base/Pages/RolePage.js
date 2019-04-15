Cypress.Commands.add('ClickonRoleTab', (loc) => {
  cy.get(loc.Userpage_tabs).eq(1).click();
});

Cypress.Commands.add('ClickonUserTab', (loc) => {
  cy.get(loc.Userpage_tabs).eq(0).click();
});

Cypress.Commands.add('VerifyRolePage', (loc,data) => {
  cy.get(loc.addnewuser).scrollIntoView().should('contain',data.add_new_user_form_text);
});

Cypress.Commands.add('VerifyAddRoleForm', (loc,data) => {
  cy.get(loc.formtitle).should('contain',data.form_title_text);
});

Cypress.Commands.add('EnterRoleName', (loc,data) => {
  data.RoleName_txt = data.RoleName;
  cy.get(loc.RoleName_loc).type(data.RoleName_txt);
});

Cypress.Commands.add('Enter_DuplicateRoleName', (loc,data) => {
  cy.get(loc.RoleName_loc).type(data.RoleName_Duplicate);
});

Cypress.Commands.add('ClickOkButton_for_RoleCreation', (loc) => {
  cy.get(loc.RoleCreation_OkButton).click();
});

Cypress.Commands.add('ClickCancelButton_for_RoleCreation', (loc) => {
  cy.get(loc.add_user_cancel_button).click();
});

Cypress.Commands.add('SelectNewRole', (data) => {
  cy.get('.userrolelist').scrollTo('bottom');
  cy.contains(data.RoleName_txt).click();
});

Cypress.Commands.add('DeleteNewRole', (loc) => {
  cy.get(loc.DeleteRole).eq(6).click();
});

Cypress.Commands.add('Delete_theRole_Popup', (loc) => {
  cy.get(loc.user_delete_button).click();
});

Cypress.Commands.add('Verify_Validation_For_Rolename', (loc,data) => {
cy.get(loc.validation_message_RoleName).should('contain',data.Validation_text_RoleName);
});

Cypress.Commands.add('Verify_Validation_For_Dulpicate_Rolename', (loc,data) => {
cy.get(loc.validation_message_RoleName).should('contain',data.Validation_text_RoleName);
});
