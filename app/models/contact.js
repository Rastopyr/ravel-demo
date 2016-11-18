import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  jobTitle: attr('string'),
  company: attr('string'),
  birthday: attr('date'),
  picture: attr('string'),
  email: attr('string'),
  phone: attr('string')
});
