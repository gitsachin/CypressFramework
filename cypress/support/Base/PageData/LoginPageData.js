// setup user data that will be used in the tests

const LoginPageData = {
  email: '',
  invalid_email: `fake${new Date().getTime()}@email.`,
  password: '',
  new_button_text: 'New Request',
  blank_email_error: 'The Email field is required.',
  invalid_email_error: 'The Email field is not a valid e-mail address.',
  blank_password_error: 'The Password field is required.',
};

// export the users you created so you can import them in your tests
export { LoginPageData};
