// setup user data that will be used in the tests

const ModulePage = {
  modules_link: 'a[href="#/module"]',
  module_lists: '.table tbody tr td a',
  module_panel_heading: '.panel .panel-heading',
  module_panel_tabs: '.panel .panel-body .tab-container li a',
  module_form_names: '.table tbody tr td a.ng-binding',
  module_form_view: '.table tbody tr td .input-group button span.glyphicon.glyphicon-camera',
  module_form_close: '.table tbody tr td .input-group button span.glyphicon.glyphicon-remove',
  module_default_fields_plus: '.fieldList span.glyphicon.glyphicon-plus',
  module_add_new_form: '.addbutton button',
  module_form_name: 'input[ng-model="form.name"]',
  module_form_save: 'button[ng-click="onSave()"]',
  module_form_cancel: 'button[ng-click="onClose()"]',
  id_BatchID: '#ID_BatchId',
  id_CurrentSeq: '#ID_CurrentSeq',
  id_CustomLongText1: '#ID_CustomLongText1',
  module_close_popup: '.modal-dialog span',
  module_Yes_button: 'button[data-ng-click="modalOptions.ok();"]',
  module_No_button: 'button[data-ng-click="modalOptions.close()"]',
};

// export the users you created so you can import them in your tests
export { ModulePage};
