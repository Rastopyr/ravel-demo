import Ember from 'ember';
import DS from 'ember-data';

const { attr, Model } = DS;
const { computed } = Ember;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  jobTitle: attr('string'),
  company: attr('string'),
  birthday: attr('date'),
  picture: attr('string'),
  email: attr('string'),
  phone: attr('string')
});
