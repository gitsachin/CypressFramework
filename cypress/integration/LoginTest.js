import { LoginPage} from '../support/Base/PageObjects/LoginPageObject.js';
import { LoginPageData} from '../support/Base/PageData/LoginPageData.js';

describe('Login Test', () => {
    beforeEach(() => {
      // is triggered in every created test
      cy.visit('');
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('should verify the dashboard page after successful login', () => {
      cy.EnterEmail(LoginPage,LoginPageData);
      cy.EnterPassword(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.new_button_text);
    });

    it('should verify blank field validation message', () => {
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.blank_email_error);
      cy.contains(LoginPageData.blank_password_error);
    });

    it('should verify invalid email validation message', () => {
      cy.EnterInvalidEmail(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.invalid_email_error);
      cy.contains(LoginPageData.blank_password_error);
    });

    it('should verify validation message with valid email and blank password', () => {
      cy.EnterEmail(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.blank_password_error);
    });
});
