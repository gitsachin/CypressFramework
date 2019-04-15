import { LoginPage} from '../support/Base/PageObjects/LoginPageObject.js';
import { LoginPageData} from '../support/Base/PageData/LoginPageData.js';
import { UserPage} from '../support/Base/PageObjects/UserPageObject.js';
import { UserPageData} from '../support/Base/PageData/UserPageData.js';
import { RolePage} from '../support/Base/PageObjects/RolePageObject.js';
import { RolePageData} from '../support/Base/PageData/RolePageData.js';
import { HomePage} from '../support/Base/PageObjects/HomePageObject.js';

describe('Role Test', () => {
    beforeEach(() => {
      // is triggered in every created test
      cy.visit('');
      cy.EnterEmail(LoginPage,LoginPageData);
      cy.EnterPassword(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.new_button_text);
      cy.ClickonUsersPage(UserPage);
      cy.VerifyUserPage(UserPage,UserPageData);
      cy.ClickonRoleTab(RolePage);
      cy.VerifyPage_UsingURL(RolePageData.add_new_Role_Url_text);
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('should verify validation for empty role name field', () => {
      cy.ClickonAddButton(RolePage.add_NewRole);
      cy.VerifyAddRoleForm(UserPage,RolePageData);
      cy.ClickUsing_Contains('Name');
      cy.Verify_Validation_For_Rolename(RolePage,RolePageData);
    });

    it('should verify validation for Duplicate role name field', () => {
      cy.ClickonAddButton(RolePage.add_NewRole);
      cy.VerifyAddRoleForm(UserPage,RolePageData);
      cy.Enter_DuplicateRoleName(RolePage,RolePageData);
      cy.ClickOkButton_for_RoleCreation(RolePage);
      cy.Verify_Validation_For_Rolename(RolePage,RolePageData);
    });

    it('should create a new role', () => {
      cy.ClickonAddButton(RolePage.add_NewRole);
      cy.VerifyAddRoleForm(UserPage,RolePageData);
      cy.EnterRoleName(RolePage,RolePageData);
      cy.ClickOkButton_for_RoleCreation(RolePage);
      cy.ClickonUserTab(RolePage);
      cy.ClickonAddButton(UserPage.addnewuser);
      cy.VerifyAddUserForm(UserPage,UserPageData);
      cy.EnterNewUsername(UserPage,UserPageData);
      cy.EnterNewUserEmail(UserPage,UserPageData);
      cy.EnterNewUserFirstname(UserPage,UserPageData);
      cy.EnterNewUserLastname(UserPage,UserPageData);
      cy.OpenRoleTab(UserPage,1,UserPageData.form_tab2_text);
      cy.SelectNewRole(RolePageData);
      cy.SubmitAddNewUser(UserPage);
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.VerifyExistingUser_Roles(UserPage,0,RolePageData.RoleName_txt);
      cy.ClickonRoleTab(RolePage);
      cy.DeleteNewRole(RolePage);
      cy.Delete_theRole_Popup(UserPage);
      cy.ClickonUserTab(RolePage);
      cy.searchPreExistingUser(UserPage,UserPageData);
      cy.get('div[role="gridcell"] div label label').should('not.exist');
      cy.CancelPreExistingUser(HomePage);
      cy.Delete_theUser(UserPage);
    });
});
