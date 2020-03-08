// setup user data that will be used in the tests
var faker = require('faker');
const RegisterPageData = {
  registrationPageURL_Text: '/Account/UserRegistration',
  registrationForm_Email: '',
  registrationForm_EmailGenerator: faker.name.firstName()+Math.floor(Math.random()*999) +1+'@mailinator.com',
  registrationForm_Password: '',
  mailinatorURL: 'https://www.mailinator.com',
  mailinatorPageTitle: 'Mailinator',
  confirm_EmailStatus: 'moments ago',
  email_message: 'Welcome to CypressDev! Please confirm your email.',
};

// export the users you created so you can import them in your tests
export { RegisterPageData};
