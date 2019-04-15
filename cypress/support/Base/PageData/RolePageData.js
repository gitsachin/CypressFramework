// setup user data that will be used in the tests
const RolePageData = {
  add_new_Role_Url_text: 'roles',
  form_title_text: 'New Role',
  RoleName: 'Role'+Math.floor(Math.random()*99)+1,
  RoleName_txt: 'Role',
  RoleName_Duplicate: 'MRS',
  Validation_text_RoleName: 'Name is required.',
  Validation_text_Duplicate_RoleName: 'Duplicate role, choose a different name.',
};

// export the users you created so you can import them in your tests
export { RolePageData};
