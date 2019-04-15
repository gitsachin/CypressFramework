// setup user data that will be used in the tests

const RolePage = {
  Userpage_tabs: '.tab-container a',
  add_NewRole: 'button[ng-click="showRoleEditor()"]',
  RoleName_loc: '.form-group input[ng-model="role.name"]',
  RoleCreation_OkButton: 'button[ng-click="saveRole()"]',
  DeleteRole: '.input-group-btn span.glyphicon.glyphicon-remove',
  validation_message_RoleName: '.form-group p[class="field-validation-error"]',
};

// export the users you created so you can import them in your tests
export { RolePage};
