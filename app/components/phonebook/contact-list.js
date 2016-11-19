import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  tagName: 'ul',
  classNames: ['contacts-list'],

  phonebook: inject.service(),
});
