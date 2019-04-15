// setup user data that will be used in the tests

const ModulePageData = {
  urlText: '/module',
  moduleText1: 'Missing Parts',
  moduleText2: 'Test Module',
  moduleText3: 'Test Form',
  modulePanelText1: 'Properties',
  modulePanelText2: 'Workflows',
  modulePanelText3: 'Forms',
  modulePanelText4: 'Permissions',
  modulePanelText5: 'Lookups',
  modulePanelText6: 'Shared Lookups',
  modulePanelText7: 'Reports',
  moduleFormText: 'Form'+Math.floor(Math.random()*99)+1,
  module_close_popupText: 'Are you sure you want to cancel the changes you made to the form?',
};

// export the users you created so you can import them in your tests
export { ModulePageData};
