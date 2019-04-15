import { ForgotPage} from '../support/Base/PageObjects/ForgotPageObject';
import { ForgotPageData} from '../support/Base/PageData/ForgotPageData';
import { RegisterPage} from '../support/Base/PageObjects/RegisterPageObject';
import { RegisterPageData} from '../support/Base/PageData/RegisterPageData';

describe('Forgot Test', () => {
    beforeEach(() => {
      // is triggered in every created test
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('should verify login page and forgot link', () => {

      cy.ClickForgotLink(ForgotPage);
      cy.EnterEmail(ForgotPage,ForgotPageData.email_text);
      cy.ClickEmailbutton(ForgotPage,ForgotPageData.email_confirm_text);
    });

    it('should Confirm forgot email for existing user', () => {
      cy.VisitDifferent_DomainURL(RegisterPageData.mailinatorURL);
      cy.VerifyPage_Title(RegisterPageData.mailinatorPageTitle);
      cy.EnterEmail_onMailinatorInputField(RegisterPage,RegisterPageData);
      cy.ClickonRecentEmail(RegisterPage);
      cy.ClickonConfirmEmail();
      cy.EnterEmail(ForgotPage,ForgotPageData.email_text);
      cy.EnterPassword(ForgotPage,ForgotPageData.enter_password);
      cy.EnterConfirmedPassword(ForgotPage,ForgotPageData.enter_confirm_password);
      cy.ClickResetbutton(ForgotPage);
    });
});
