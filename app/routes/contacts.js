import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    }
  },

  phonebook: inject.service(),

  model({ search }) {
    const contacts = this.store.findAll('contact');

    this.set('phonebook.contacts', contacts);

    if (!search) {
      return contacts;
    }

    return contacts.then(function(payload) {
      return payload.filter(function(e) {
        return e.get('fullName').match(search, 'gi');
      });
    });
  }
});
