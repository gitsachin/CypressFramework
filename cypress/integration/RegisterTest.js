import { RegisterPage} from '../support/Base/PageObjects/RegisterPageObject.js';
import { RegisterPageData} from '../support/Base/PageData/RegisterPageData.js';
var faker = require('faker');

describe('Register Test', () => {
    beforeEach(() => {
      // is triggered in every created test
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it.skip('should register new user with email confirmation', () => {
      cy.visit('');
      cy.OpenRegistrationPage(RegisterPage);
      cy.VerifyPage_UsingURL(RegisterPageData.registrationPageURL_Text);
      cy.Verify_EndUserRegistrationForm(RegisterPage);
      cy.EnterEmail_forRegistration(RegisterPage,RegisterPageData);
      cy.EnterPassword_forRegistration(RegisterPage,RegisterPageData);
      cy.EnterConfirmPassword_forRegistration(RegisterPage,RegisterPageData);
      cy.Submit_EndUserFormRegistration(RegisterPage);
    });

    it('should Confirm email for new created user', () => {
      cy.VisitDifferent_DomainURL(RegisterPageData.mailinatorURL);
      cy.VerifyPage_Title(RegisterPageData.mailinatorPageTitle);
      cy.EnterEmail_onMailinatorInputField(RegisterPage,RegisterPageData);
      cy.ClickonRecentEmail(RegisterPage);
      cy.ClickonConfirmEmail();
    });
  });
