// setup user data that will be used in the tests

const ForgotPage = {
  forgot_link: 'a[href="/Account/ForgotPassword"]',
  email_field: '#Email',
  email_button: '.btn.btn-default.btn-block.btn-primary',
  confirm_email_page: '.form-group>h4',
  reset_password_button: 'td>div>a',
  password_field: '#Password',
  confirmed_password_field: '#ConfirmPassword',
  reset_button: '.btn.btn-default.btn-block.btn-primary',
};

// export the users you created so you can import them in your tests
export { ForgotPage};
