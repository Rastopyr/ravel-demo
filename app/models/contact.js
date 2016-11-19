import Ember from 'ember';
import DS from 'ember-data';
import format from 'npm:date-fns/format';

const { attr, Model } = DS;
const { computed } = Ember;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  jobTitle: attr('string'),
  company: attr('string'),
  birthday: attr('date'),
  picture: attr('string'),
  email: attr('string'),
  phone: attr('string'),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  formatedBirthday: computed('birthday', function() {
    const birthday = this.get('birthday');

    return format(birthday, 'Do MMMM, YYYY');
  }),
});
