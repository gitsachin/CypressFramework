// setup user data that will be used in the tests
var faker = require('faker');
const UserPageData = {
  add_new_user_form_text: '+Add',
  form_title_text: 'Add user',
  username_validation_message: 'Username is too short.',
  useremail_validation_message: 'Enter a valid email.',
  role_validation_message: 'The user must be added to at least one role.',
  new_email_test: 'abc123@gmail.com',
  new_firstname_test: 'Cecilia',
  new_lastname_test: 'Feil',
  faker_firstname: faker.name.firstName(),
  faker_lastname: faker.name.lastName(),
  faker_email: faker.internet.email(),
  form_tab1_text: 'Details',
  form_tab2_text: 'Roles',
  form_roles_textTenant_Admin: 'Tenant Admin',
  form_roles_textModule_Admin: 'Module Admin',
  waringText: 'Forbidden',
};

// export the users you created so you can import them in your tests
export { UserPageData};
