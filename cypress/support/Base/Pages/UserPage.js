Cypress.Commands.add('ClickonUsersPage', (loc) => {
  cy.get(loc.userpage).click();
});

Cypress.Commands.add('VerifyUserPage', (loc,data) => {
  cy.get(loc.addnewuser).scrollIntoView().should('contain',data.add_new_user_form_text);
});

Cypress.Commands.add('VerifyAddUserForm', (loc,data) => {
  cy.get(loc.formtitle).scrollIntoView().should('contain',data.form_title_text);
});

Cypress.Commands.add('EnterNewUsername', (loc,data) => {
  data.new_email_test = data.faker_email;
  cy.get(loc.username_field).type(data.new_email_test);
});

Cypress.Commands.add('EnterStaticUsername', (loc,data) => {
  cy.get(loc.username_field).type(data.new_email_test);
});

Cypress.Commands.add('EnterInvalidUsername', (loc) => {
  cy.get(loc.username_field).type('a');
});

Cypress.Commands.add('VerifyInvalidUsername_Message', (loc,data) => {
  cy.get(loc.username_validation_field).should('contain',data.username_validation_message);
});

Cypress.Commands.add('EnterNewUserEmail', (loc,data) => {
  cy.get(loc.email_field).type(data.new_email_test);
});

Cypress.Commands.add('EnterInvalidUserEmail', (loc,data) => {
  cy.get(loc.email_field).type(data);
});

Cypress.Commands.add('VerifyInvalidEmail_Message', (loc,data) => {
  cy.get(loc.username_validation_field).should('contain',data.useremail_validation_message);
});

Cypress.Commands.add('EnterNewUserFirstname', (loc,data) => {
  data.new_firstname_test = data.faker_firstname;
  cy.get(loc.firstname_field).type(data.new_firstname_test);
});

Cypress.Commands.add('EnterNewUserLastname', (loc,data) => {
  data.new_lastname_test = data.faker_lastname;
  cy.get(loc.lastname_field).type(data.new_lastname_test);
});

Cypress.Commands.add('OpenRoleTab', (loc,index,data) => {
  cy.get(loc.add_user_form_tabs).eq(index).should('contain',data).click();
  cy.wait(2000);
});

Cypress.Commands.add('VerifyRole_Message', (loc,data) => {
  cy.get(loc.username_validation_field).should('contain',data.role_validation_message);
});

Cypress.Commands.add('SelectTenantAdminRole', (loc) => {
  cy.get(loc.new_user_role_list).eq(0).click();
});

Cypress.Commands.add('SelectModuleAdminRole', (loc) => {
  cy.get(loc.new_user_role_list).eq(1).click();
});

Cypress.Commands.add('SelectFinanceAdminRole', (loc) => {
  cy.get(loc.new_user_role_list).eq(2).click();
});

Cypress.Commands.add('SelectMRSRole', (loc) => {
  cy.get(loc.new_user_role_list).eq(3).click();
});

Cypress.Commands.add('SelectMU-MCRole', (loc) => {
  cy.get(loc.new_user_role_list).eq(4).click();
});

Cypress.Commands.add('SelectMU-OPRole', (loc) => {
  cy.get(loc.new_user_role_list).eq(5).click();
});

Cypress.Commands.add('SubmitAddNewUser', (loc) => {
  cy.get(loc.add_user_submit_button).click();
  cy.wait(2000);
});

Cypress.Commands.add('CancelAddNewUser', (loc) => {
  cy.get(loc.add_user_cancel_button).click();
});

Cypress.Commands.add('Delete_theUser', (loc) => {
  cy.get(loc.user_delete_button).click();
});

Cypress.Commands.add('Cancel_theUserDeletion', (loc) => {
  cy.get(loc.user_cancel_button).click();
});

Cypress.Commands.add('searchPreExistingUser', (loc,data) => {
  cy.wait(3000);
  cy.get(loc.form_header_search_boxes).eq(1).type(data.new_email_test);
  cy.wait(2000);
});

Cypress.Commands.add('searchExistingUser', (loc,data) => {
  cy.wait(3000);
  cy.get(loc.form_header_search_boxes).eq(1).type(data);
  cy.wait(2000);
});

Cypress.Commands.add('VerifyExistingUser_inRow', (loc,index,data) => {
  cy.get(loc.datagridcell).eq(index).scrollIntoView().should('contain', data);
});

Cypress.Commands.add('VerifyExistingUser_Roles', (loc,index,data) => {
  cy.get(loc.user_roles_assigned).eq(index).scrollIntoView().should('contain', data);
});

Cypress.Commands.add('EditPreExistingUser', (loc) => {
  cy.get(loc.datagridbutton).eq(0).scrollIntoView().click();
});

Cypress.Commands.add('CancelPreExistingUser', (loc) => {
  cy.get(loc.datagridbutton).eq(1).scrollIntoView().click();
});

Cypress.Commands.add('VerifyUsername', (loc,data) => {
  cy.get(loc.username_field).should('have.value', data.new_email_test);
});

Cypress.Commands.add('ClearUsername', (loc) => {
  cy.get(loc.username_field).clear();
});

Cypress.Commands.add('VerifyEmail', (loc,data) => {
  cy.get(loc.email_field).should('have.value', data.new_email_test);
});

Cypress.Commands.add('VerifyFirstname', (loc,data) => {
  cy.get(loc.firstname_field).should('have.value', data.new_firstname_test);
});

Cypress.Commands.add('VerifyLastname', (loc,data) => {
  cy.get(loc.lastname_field).should('have.value', data.new_lastname_test);
});

Cypress.Commands.add('UpdateLastname', (loc,loc1,data) => {
  var updatedLastname = data.new_lastname_test+1;
  cy.get(loc.lastname_field).type(1);
  cy.get(loc.add_user_submit_button).click();
  cy.EditPreExistingUser(loc1);
  cy.get(loc.lastname_field).should('have.value', updatedLastname);
  cy.get(loc.add_user_submit_button).click();
  cy.wait(2000);
});
