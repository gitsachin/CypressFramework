// setup user data that will be used in the tests

const HomePage = {
  modal_form: '.modal-dialog',
  computer_id: '#ID_ComputerID',
  id_operator: '#ID_Operator',
  id_currentseq: '#ID_CurrentSeq',
  id_part: '#ID_Part',
  id_nextseqneeded: '#ID_NextSeqNeeded',
  validationsummary: '.fg-validation-summary li',
  AlertMessage: '.alert_in_form_title div',
  time_needed: '#ID_TimeNeeded_TimeDrop',
  submitNewForm: 'button[ng-click="ok()"]',
  submitandNewForm: 'button[ng-click="submitAndAddAnother()"]',
  cancelNewForm: 'button[ng-click="cancel()"]',
  formcover_buttons: '.formcover.ng-scope button',
  searchbox: '.searchparent .searchtextbox',
  searchicon: '.searchparent .btn.searchicon',
  datagridcell: 'div[role="gridcell"] div',
  datagridbutton: 'div[role="gridcell"] button',
  datagriddropdown: 'div[role="gridcell"] ul a',
};

// export the users you created so you can import them in your tests
export { HomePage};
