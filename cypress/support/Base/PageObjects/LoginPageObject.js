// setup user data that will be used in the tests

const LoginPage = {
  loginform: '.Login-Form',
  email_field: '#Email',
  password_field: '#Password',
  login_button: 'input[name="Login"]',
  forget_password: 'a[href="/Account/ForgotPassword"]',
  keep_me_login: '#RememberMe',
  register: 'a[href="/Account/UserRegistration"]',
  validation_message: '.field-validation-error',
};

// export the users you created so you can import them in your tests
export { LoginPage};
