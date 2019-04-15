
Cypress.Commands.add('clickOnNewRequest', (data) => {
  cy.wait(4000);
  cy.contains(data.new_button_text).click();
});

Cypress.Commands.add('EnterIdOperator', (loc,data) => {
  data.new_id_operator_test = data.new_id_operator;
  cy.get(loc.id_operator).type(data.new_id_operator_test);
});

Cypress.Commands.add('EnterCurrentSeq', (loc,data) => {
  data.new_current_test = data.new_current_sequence;
  cy.get(loc.id_currentseq).type(data.new_current_test);
});

Cypress.Commands.add('EnterPartNo', (loc,data) => {
  data.new_part_no_test = data.new_part_no;
  cy.get(loc.id_part).type(data.new_part_no_test);
});

Cypress.Commands.add('EnterInvalidPartNo', (loc,data) => {
  cy.get(loc.id_part).type(data.new_part_no_test);
  cy.get(loc.id_operator).click();
});

Cypress.Commands.add('EnterNextSeq', (loc,data) => {
  data.new_seq_added_test = data.new_seq_added;
  cy.get(loc.id_nextseqneeded).type(data.new_seq_added_test);
});

Cypress.Commands.add('ClearFields', (loc) => {
  cy.get(loc).clear();
});

Cypress.Commands.add('SelectTimeNeeded', (data) => {
  cy.get('select').eq(1).select(data.new_time_needed);
});


Cypress.Commands.add('SelectRootCause', (data) => {
  cy.get('select').eq(2).select(data.new_root_cause);
});

Cypress.Commands.add('SelectRootCauseBlank', () => {
  cy.get('select').eq(2).scrollIntoView().select("");
});

Cypress.Commands.add('SubmitForm', (loc) => {
  cy.get(loc.submitNewForm).click();
});

Cypress.Commands.add('Click_SubmitForm_andNew', (loc) => {
  cy.get(loc.submitandNewForm).click();
});

Cypress.Commands.add('VerifyDisabledButton', (loc) => {
  cy.get(loc).should('have.class','disabled');
});

Cypress.Commands.add('VerifyDisabledComputerID', (loc) => {
  cy.get(loc.computer_id).should('be.disabled');
});

Cypress.Commands.add('CancelForm', (loc) => {
  cy.get(loc.cancelNewForm).click();
});

Cypress.Commands.add('ModalForm_notPresent', (loc) => {
  cy.get(loc.modal_form).should('be.not.visible');
});

Cypress.Commands.add('ModalForm_Present', (loc) => {
  cy.get(loc.modal_form).should('be.visible');
});

Cypress.Commands.add('VerifyFormButtons', (loc,data) => {
  cy.get(loc.formcover_buttons).eq(0).should('contain',data.new_form_button1);
  cy.get(loc.formcover_buttons).eq(1).should('contain',data.new_form_button2);
});

Cypress.Commands.add('ClickConfirm_CancelButton', (loc) => {
  cy.get(loc.formcover_buttons).eq(0).click();
});

Cypress.Commands.add('ClickConfirm_EditingButton', (loc) => {
  cy.get(loc.formcover_buttons).eq(1).click();
});

Cypress.Commands.add('Search', (loc,data) => {
  cy.wait(2000);
  cy.get(loc.searchbox).type(data.new_current_test);
  cy.get(loc.searchicon).click();
  cy.wait(2000);
});

Cypress.Commands.add('VerifyCurrentSeq', (loc,data) => {
  cy.get(loc.datagridcell).eq(4).should('contain', data.new_current_test);
});

Cypress.Commands.add('VerifyIdOperator', (loc,data) => {
  cy.get(loc.datagridcell).eq(6).should('contain', data.new_id_operator_test);
});

Cypress.Commands.add('VerifyNextSeq', (loc,data) => {
  cy.get(loc.datagridcell).eq(5).should('contain', data.new_seq_added_test);
});

Cypress.Commands.add('VerifyPart', (loc,data) => {
  cy.get(loc.datagridcell).eq(7).should('contain', data.new_part_no_test);
});

Cypress.Commands.add('VerifyValidationSummary', (loc,index,data) => {
  cy.get(loc.validationsummary).eq(index).should('contain',data.new_field_validation);
});

Cypress.Commands.add('VerifyRootCauseValidation', (loc,index,data) => {
  cy.get(loc.validationsummary).eq(index).should('contain',data.new_root_cause_validation);
});

Cypress.Commands.add('VerifyAlertMessage', (loc,data) => {
  cy.get(loc.AlertMessage).should('contain',data.errormessage1);
  cy.get(loc.AlertMessage).should('contain',data.errormessage2);
});

Cypress.Commands.add('VerifyStatus', (loc,data) => {
  cy.get(loc.datagridcell).eq(9).should('contain',data);
});

Cypress.Commands.add('ClickMCAccept', (loc,data) => {
  cy.get(loc.datagridbutton).eq(0).scrollIntoView().click();
  cy.get(loc.datagriddropdown).eq(0).scrollIntoView().should('contain',data).click();
  cy.wait(2000);
});
