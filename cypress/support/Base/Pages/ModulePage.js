Cypress.Commands.add('ClickonModuleLink', (loc) => {
  cy.get(loc.modules_link).click();
});

Cypress.Commands.add('Select_Module_from_List', (loc,index,data) => {
  cy.get(loc.module_lists).eq(index).should('contain',data).click();
  cy.get(loc.module_panel_heading).should('contain',data);
});

Cypress.Commands.add('Select_Tab_from_Module_List', (loc,index,data) => {
  cy.get(loc.module_panel_tabs).eq(index).should('contain',data).click();
});

Cypress.Commands.add('Select_view_from_form_List', (loc,index) => {
  cy.get(loc.module_form_view).eq(index).click();
});

Cypress.Commands.add('Select_close_from_form_List', (loc,index) => {
  cy.get(loc.module_form_close).eq(index).click();
});

Cypress.Commands.add('Verify_Default_Form', (loc) => {
  cy.get(loc.id_operator).should('be.visible');
  cy.get(loc.id_currentseq).should('be.visible');
  cy.get(loc.id_part).should('be.visible');
  cy.get(loc.id_nextseqneeded).should('be.visible');
});

Cypress.Commands.add('AddNewForm', (loc) => {
  cy.get(loc.module_add_new_form).click();
  cy.wait(4000);
});

Cypress.Commands.add('Create_new_form_with_fields', (loc,data) => {
  cy.get(loc.module_form_name).type(data.moduleFormText);
  cy.get(loc.module_default_fields_plus).eq(0).click();
  cy.get(loc.module_default_fields_plus).eq(0).click();
  cy.get(loc.module_default_fields_plus).eq(0).click();
  cy.get(loc.module_form_save).eq(0).click();
  cy.wait(2000);
  cy.get(loc.module_form_cancel).eq(0).click();
});

Cypress.Commands.add('Verify_New_added_Form', (loc) => {
  cy.get(loc.id_BatchID).should('be.visible');
  cy.get(loc.id_CurrentSeq).should('be.visible');
  cy.get(loc.id_CustomLongText1).should('be.visible');
});

Cypress.Commands.add('ClickOn_Module_Form_Cancel', (loc) => {
  cy.wait(2000);
  cy.get(loc.module_form_cancel).eq(0).click();
});

Cypress.Commands.add('VerifyClose_PopupMessage', (loc,data) => {
  cy.get(loc.module_close_popup).should('contain',data.module_close_popupText);
});

Cypress.Commands.add('ClickModule_YesButton', (loc) => {
  cy.get(loc.module_Yes_button).click();
});

Cypress.Commands.add('ClickModule_NoButton', (loc) => {
  cy.get(loc.module_No_button).click();
});
