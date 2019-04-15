import { LoginPage} from '../support/Base/PageObjects/LoginPageObject.js';
import { LoginPageData} from '../support/Base/PageData/LoginPageData.js';
import { UserPage} from '../support/Base/PageObjects/UserPageObject.js';
import { UserPageData} from '../support/Base/PageData/UserPageData.js';
import { HomePage} from '../support/Base/PageObjects/HomePageObject.js';

describe('User Test', () => {
    beforeEach(() => {
      // is triggered in every created test
      cy.visit('');
      cy.EnterEmail(LoginPage,LoginPageData);
      cy.EnterPassword(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.new_button_text);
      cy.ClickonUsersPage(UserPage);
      cy.VerifyUserPage(UserPage,UserPageData);
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('should verify disabled buttons', () => {
      cy.ClickonAddButton(UserPage.addnewuser);
      cy.VerifyDisabled(UserPage.add_user_submit_button);
      cy.CancelAddNewUser(UserPage);
      cy.ModalForm_notPresent(HomePage);
    });

    it('should verify validation message for invalid data', () => {
      cy.ClickonAddButton(UserPage.addnewuser);
      cy.EnterInvalidUsername(UserPage);
      cy.EnterInvalidUserEmail(UserPage,LoginPageData.invalid_email);
      cy.VerifyInvalidUsername_Message(UserPage,UserPageData);
      cy.VerifyInvalidEmail_Message(UserPage,UserPageData);
      cy.CancelAddNewUser(UserPage);
      cy.ModalForm_notPresent(HomePage);
    });

    it('should verify validation message for roles', () => {
      cy.ClickonAddButton(UserPage.addnewuser);
      cy.EnterNewUsername(UserPage,UserPageData);
      cy.EnterNewUserEmail(UserPage,UserPageData);
      cy.SubmitAddNewUser(UserPage);
      cy.VerifyRole_Message(UserPage,UserPageData);
    });

    it('should verify deletion of login existing User test', () => {
      cy.searchExistingUser(UserPage,LoginPageData.email);
      cy.CancelPreExistingUser(HomePage);
      cy.Delete_theUser(UserPage);
      cy.VerifyValidationError(UserPage.warning_error,UserPageData.waringText);
    });

    it('should create new user test', () => {
      cy.ClickonAddButton(UserPage.addnewuser);
      cy.VerifyAddUserForm(UserPage,UserPageData);
      cy.EnterNewUsername(UserPage,UserPageData);
      cy.EnterNewUserEmail(UserPage,UserPageData);
      cy.EnterNewUserFirstname(UserPage,UserPageData);
      cy.EnterNewUserLastname(UserPage,UserPageData);
      cy.OpenRoleTab(UserPage,1,UserPageData.form_tab2_text);
      cy.SelectTenantAdminRole(UserPage);
      cy.SelectModuleAdminRole(UserPage);
      cy.SubmitAddNewUser(UserPage);
    });

    it('should Verify pre existing User editing with cancel test', () => {
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.VerifyExistingUser_inRow(HomePage,1,UserPageData.new_email_test);
      cy.VerifyExistingUser_inRow(HomePage,2,UserPageData.new_email_test);
      cy.EditPreExistingUser(HomePage);
      cy.VerifyUsername(UserPage,UserPageData);
      cy.VerifyEmail(UserPage,UserPageData);
      cy.ClearUsername(UserPage);
      cy.CancelAddNewUser(UserPage);
      cy.VerifyExistingUser_inRow(HomePage,2,UserPageData.new_email_test);
    });

    it('should Verify pre existing User Role Changes test', () => {
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.VerifyExistingUser_Roles(UserPage,0,UserPageData.form_roles_textTenant_Admin);
      cy.VerifyExistingUser_Roles(UserPage,1,UserPageData.form_roles_textModule_Admin);
      cy.EditPreExistingUser(HomePage);
      cy.OpenRoleTab(UserPage,1,UserPageData.form_tab2_text);
      cy.SelectModuleAdminRole(UserPage);
      cy.SubmitAddNewUser(UserPage);
      cy.VerifyExistingUser_Roles(UserPage,0,UserPageData.form_roles_textTenant_Admin);
      cy.EditPreExistingUser(HomePage);
      cy.OpenRoleTab(UserPage,1,UserPageData.form_tab2_text);
      cy.SelectModuleAdminRole(UserPage);
      cy.SubmitAddNewUser(UserPage);
      cy.VerifyExistingUser_Roles(UserPage,0,UserPageData.form_roles_textTenant_Admin);
      cy.VerifyExistingUser_Roles(UserPage,1,UserPageData.form_roles_textModule_Admin);
    });

    it('should Verify pre existing User Role Changes with cancel test', () => {
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.VerifyExistingUser_Roles(UserPage,0,UserPageData.form_roles_textTenant_Admin);
      cy.VerifyExistingUser_Roles(UserPage,1,UserPageData.form_roles_textModule_Admin);
      cy.EditPreExistingUser(HomePage);
      cy.OpenRoleTab(UserPage,1,UserPageData.form_tab2_text);
      cy.SelectModuleAdminRole(UserPage);
      cy.CancelAddNewUser(UserPage);
      cy.VerifyExistingUser_Roles(UserPage,0,UserPageData.form_roles_textTenant_Admin);
      cy.VerifyExistingUser_Roles(UserPage,1,UserPageData.form_roles_textModule_Admin);
    });

    it('should verify validation message for roles for pre existing user test', () => {
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.VerifyExistingUser_Roles(UserPage,0,UserPageData.form_roles_textTenant_Admin);
      cy.VerifyExistingUser_Roles(UserPage,1,UserPageData.form_roles_textModule_Admin);
      cy.EditPreExistingUser(HomePage);
      cy.OpenRoleTab(UserPage,1,UserPageData.form_tab2_text);
      cy.SelectTenantAdminRole(UserPage);
      cy.SelectModuleAdminRole(UserPage);
      cy.SubmitAddNewUser(UserPage);
      cy.VerifyRole_Message(UserPage,UserPageData);
      cy.SelectTenantAdminRole(UserPage);
      cy.SelectModuleAdminRole(UserPage);
      cy.SubmitAddNewUser(UserPage);
    });

    it('should update and cancel the pre existing User test', () => {
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.EditPreExistingUser(HomePage);
      cy.VerifyUsername(UserPage,UserPageData);
      cy.VerifyEmail(UserPage,UserPageData);
      cy.VerifyFirstname(UserPage,UserPageData);
      cy.VerifyLastname(UserPage,UserPageData);
      cy.UpdateLastname(UserPage,HomePage,UserPageData);
      cy.CancelPreExistingUser(HomePage);
      cy.Cancel_theUserDeletion(UserPage);
      cy.CancelPreExistingUser(HomePage);
      cy.Delete_theUser(UserPage);
    });
});
