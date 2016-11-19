import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  phonebook: inject.service(),

  model({ id }) {
    const contacts = this.modelFor('contacts');
    const contact = contacts.find((c) => c.get('id') === id);

    this.set('phonebook.contact', contact);

    return contact;
  }
});
