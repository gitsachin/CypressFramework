// setup user data that will be used in the tests

const UserPage = {
  userpage: 'a[href="#/account/members"]',
  addnewuser: 'button[ng-click="showNewUserDialog()"]',
  importnewuser: 'button[href="#/account/import"]',
  choosefilesinput: '.center input[type="file"]',
  formtitle: '.modal-title',
  username_field: 'input[name="username"]',
  username_validation_field: 'p[class="field-validation-error"]',
  email_field: 'input[name="email"]',
  firstname_field: 'input[name="firstname"]',
  lastname_field: 'input[name="lastname"]',
  add_user_form_tabs: 'form[name="userForm"] ul a',
  new_user_role_list: '.userrolelist table input',
  add_user_submit_button: 'button[ng-click="saveUser(userForm.$valid)"]',
  add_user_cancel_button: 'button[ng-click="cancel()"]',
  user_delete_button: 'button[ng-click="deleteItem()"]',
  user_roles_assigned: 'div[role="gridcell"] div label label',
  user_cancel_button: 'button[ng-click="deleteItemCancelled()"]',
  form_header_search_boxes: 'div[role="rowgroup"] .ui-grid-top-panel .ui-grid-header-cell-row input',
  user_column_menu_arrows: '.ui-grid-column-menu-button.ng-scope',
  update_isOnline: 'input[ng-model="user.isOnline"]',
  warning_error: 'div[role="alert"] div',
};

// export the users you created so you can import them in your tests
export { UserPage};
