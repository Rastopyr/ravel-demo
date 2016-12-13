import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'contacts/contact',

  model() {
    return this.modelFor('contacts').get('firstObject');
  },
});
