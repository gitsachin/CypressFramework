import { LoginPage} from '../support/Base/PageObjects/LoginPageObject.js';
import { LoginPageData} from '../support/Base/PageData/LoginPageData.js';
import { HomePage} from '../support/Base/PageObjects/HomePageObject.js';
import { HomePageData} from '../support/Base/PageData/HomePageData.js';

describe('New Request Test', () => {
    beforeEach(() => {
      // is triggered in every created test
      cy.visit('');
      cy.EnterEmail(LoginPage,LoginPageData);
      cy.EnterPassword(LoginPage,LoginPageData);
      cy.ClickSubmitButton(LoginPage);
      cy.contains(LoginPageData.new_button_text);
    });

    before(() => {
      // first thing that happens before tests
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('should verify disabled field and buttons', () => {
      cy.clickOnNewRequest(LoginPageData);
      cy.contains(HomePageData.new_form_text);
      cy.VerifyDisabledComputerID(HomePage);
      cy.VerifyDisabledButton(HomePage.submitNewForm);
      cy.VerifyDisabledButton(HomePage.submitandNewForm);
      cy.CancelForm(HomePage);
      cy.ModalForm_notPresent(HomePage);
    });

    it('should validate required new request test fields', () => {
      cy.clickOnNewRequest(LoginPageData);
      cy.contains(HomePageData.new_form_text);
      cy.EnterIdOperator(HomePage,HomePageData);
      cy.EnterCurrentSeq(HomePage,HomePageData);
      cy.EnterPartNo(HomePage,HomePageData);
      cy.EnterNextSeq(HomePage,HomePageData);
      cy.SelectTimeNeeded(HomePageData);
      cy.SelectRootCause(HomePageData);
      cy.ClearFields(HomePage.id_operator);
      cy.ClearFields(HomePage.id_currentseq);
      cy.ClearFields(HomePage.id_part);
      cy.ClearFields(HomePage.id_nextseqneeded);
      cy.SelectRootCauseBlank();
      cy.VerifyValidationSummary(HomePage,0,HomePageData);
      cy.VerifyValidationSummary(HomePage,1,HomePageData);
      cy.VerifyValidationSummary(HomePage,2,HomePageData);
      cy.VerifyValidationSummary(HomePage,3,HomePageData);
      cy.VerifyRootCauseValidation(HomePage,4,HomePageData);
      cy.CancelForm(HomePage);
      cy.ClickConfirm_CancelButton(HomePage);
      cy.ModalForm_notPresent(HomePage);
    });

    it('should verify Cancel,Confirm_Cancel,Confirm_Editing functionality', () => {
      cy.clickOnNewRequest(LoginPageData);
      cy.contains(HomePageData.new_form_text);
      cy.CancelForm(HomePage);
      cy.ModalForm_notPresent(HomePage);
      cy.clickOnNewRequest(LoginPageData);
      cy.EnterIdOperator(HomePage,HomePageData);
      cy.CancelForm(HomePage);
      cy.VerifyFormButtons(HomePage,HomePageData);
      cy.ClickConfirm_EditingButton(HomePage);
      cy.ModalForm_Present(HomePage);
      cy.CancelForm(HomePage);
      cy.ClickConfirm_CancelButton(HomePage);
      cy.ModalForm_notPresent(HomePage);
    });

    it('should create new request test with Submit button', () => {
      cy.clickOnNewRequest(LoginPageData);
      cy.contains(HomePageData.new_form_text);
      cy.EnterIdOperator(HomePage,HomePageData);
      cy.EnterCurrentSeq(HomePage,HomePageData);
      cy.EnterPartNo(HomePage,HomePageData);
      cy.EnterNextSeq(HomePage,HomePageData);
      cy.SelectTimeNeeded(HomePageData);
      cy.SelectRootCause(HomePageData);
      cy.SubmitForm(HomePage);
      cy.Search(HomePage,HomePageData);
      cy.VerifyCurrentSeq(HomePage,HomePageData);
      cy.VerifyNextSeq(HomePage,HomePageData);
      cy.VerifyIdOperator(HomePage,HomePageData);
      cy.VerifyPart(HomePage,HomePageData);
      cy.VerifyStatus(HomePage,HomePageData.status1);
    });

    it('should complete the pre existing request test', () => {
      cy.Search(HomePage,HomePageData);
      cy.VerifyStatus(HomePage,HomePageData.status1);
      cy.ClickMCAccept(HomePage,HomePageData.link1);
      cy.SubmitForm(HomePage);
      cy.VerifyStatus(HomePage,HomePageData.status2);
      cy.ClickMCAccept(HomePage,HomePageData.link2);
      cy.SubmitForm(HomePage);
      cy.VerifyStatus(HomePage,HomePageData.status3);
      cy.ClickMCAccept(HomePage,HomePageData.link3);
      cy.SubmitForm(HomePage);
      cy.VerifyStatus(HomePage,HomePageData.status4);
      cy.ClickMCAccept(HomePage,HomePageData.link4);
      cy.SubmitForm(HomePage);
    });

    it('should create new request test with submit and new button', () => {
      cy.clickOnNewRequest(LoginPageData);
      cy.contains(HomePageData.new_form_text);
      cy.EnterIdOperator(HomePage,HomePageData);
      cy.EnterCurrentSeq(HomePage,HomePageData);
      cy.EnterPartNo(HomePage,HomePageData);
      cy.EnterNextSeq(HomePage,HomePageData);
      cy.SelectTimeNeeded(HomePageData);
      cy.SelectRootCause(HomePageData);
      cy.Click_SubmitForm_andNew(HomePage);
      cy.ModalForm_Present(HomePage);
    });
});
