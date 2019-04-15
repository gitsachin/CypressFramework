import { LoginPage} from '../support/Base/PageObjects/LoginPageObject.js';
import { LoginPageData} from '../support/Base/PageData/LoginPageData.js';
import { ModulePage} from '../support/Base/PageObjects/ModulePageObject.js';
import { ModulePageData} from '../support/Base/PageData/ModulePageData.js';
import { HomePage} from '../support/Base/PageObjects/HomePageObject.js';
import { UserPage} from '../support/Base/PageObjects/UserPageObject.js';

describe('Module Test', () => {
    beforeEach(() => {
      // is triggered in every created test
      cy.visit('');
      cy.EnterEmail(LoginPage,LoginPageData);
      cy.EnterPassword(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.new_button_text);
      cy.ClickonModuleLink(ModulePage);
      cy.VerifyPage_UsingURL(ModulePageData.urlText);
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('should verify Deafult form of missing parts', () => {
      cy.Select_Module_from_List(ModulePage,0,ModulePageData.moduleText1);
      cy.Select_Tab_from_Module_List(ModulePage,2,ModulePageData.modulePanelText3);
      cy.Select_view_from_form_List(ModulePage,2);
      cy.Verify_Default_Form(HomePage);
    });

    it('should create new form of missing parts', () => {
      cy.Select_Module_from_List(ModulePage,0,ModulePageData.moduleText1);
      cy.Select_Tab_from_Module_List(ModulePage,2,ModulePageData.modulePanelText3);
      cy.AddNewForm(ModulePage);
      cy.Create_new_form_with_fields(ModulePage,ModulePageData);
      cy.Select_view_from_form_List(ModulePage,3);
      cy.Verify_New_added_Form(ModulePage);
      cy.CancelAddNewUser(UserPage);
      cy.Select_close_from_form_List(ModulePage,3);
      cy.Delete_theUser(UserPage);
    });

    it('should verify cancel the changes popup Functionality while creating new form', () => {
      cy.Select_Module_from_List(ModulePage,0,ModulePageData.moduleText1);
      cy.Select_Tab_from_Module_List(ModulePage,2,ModulePageData.modulePanelText3);
      cy.AddNewForm(ModulePage);
      cy.ClickOn_Module_Form_Cancel(ModulePage);
      cy.VerifyClose_PopupMessage(ModulePage,ModulePageData);
      cy.ClickModule_NoButton(ModulePage);
      cy.ClickOn_Module_Form_Cancel(ModulePage);
      cy.ClickModule_YesButton(ModulePage);
    });

});
