import Ember from 'ember';

const { Service, computed } = Ember;

export default Service.extend({
  activeContact: computed('contact', 'contacts.[]', function () {
    return this.get('contact') || this.get('contacts.firstObject');
  }),
});
