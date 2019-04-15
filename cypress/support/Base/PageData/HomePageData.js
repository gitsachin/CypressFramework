// setup user data that will be used in the tests
var faker = require('faker');
var date = new Date();
var hours = date.getHours() >= 12 ? date.getHours() - 12 + 1 : date.getHours() + 1;
var am_pm = date.getHours() >= 12 ? "PM" : "AM";
const HomePageData = {
  new_form_text: 'Submit',
  new_form_button_text: 'Submit and New',
  new_current_test: '15888043',
  new_id_operator_test: 'Sachin',
  new_part_no_test: '1284',
  new_seq_added_test: '5207701',
  new_field_validation: 'A value is required for this field.',
  new_root_cause_validation: 'Root Cause is required.',
  new_form_button1: 'Confirm Cancel',
  new_form_button2: 'Continue Editing',
  errormessage1: 'Warning: Could not find details for Material:',
  errormessage2: 'If you are sure the Material was correclty entered, ignore this warning.',
  status1: 'New',
  status2: 'MCInProgress',
  status3: 'MCCompleted',
  status4: 'Completed',
  link1: 'MC Accept',
  link2: 'MC Complete',
  link3: 'Complete',
  link4: 'Cancel',
  new_id_operator: faker.name.findName(),
  new_current_sequence: Math.floor(Math.random()*10000000) +10000000,
  new_part_no: Math.floor(Math.random()*1000000000) +100000000,
  new_seq_added: Math.floor(Math.random()*10000000) +1000000,
  new_time_needed: `1 hour (${hours+am_pm})`,
  new_root_cause: 'Late Fired Trigger',
  MC_form_text: 'MC Accept',
};

// export the users you created so you can import them in your tests
export { HomePageData};
