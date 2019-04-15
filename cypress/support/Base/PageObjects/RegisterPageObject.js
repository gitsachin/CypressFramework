// setup user data that will be used in the tests

const RegisterPage = {
  registration_page_link: 'a[href="/Account/UserRegistration"]',
  registration_page_EndUserForm: '.EndUserFormRegistration .EndUserRegistration',
  registrationForm_EmailField: '#Email',
  registrationForm_PasswordField: '#Password',
  registrationForm_ConfirmPasswordField: '#ConfirmPassword',
  registrationForm_SubmitButton: 'input[type="submit"]',
  mailinatorPage_InputField: 'input#inboxfield',
  email_texts: '.table td',
};

// export the users you created so you can import them in your tests
export { RegisterPage};
