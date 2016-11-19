import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  actions: {
    searchUsers(value) {
      this.setTimer(value);
    }
  },

  classNames: ['search-wrapper'],

  phonebook: inject.service(),
  timer: null,

  init(...args) {
    this.set('searchValue', this.get('search'));

    return this._super(args);
  },

  setTimer(value) {
    const timer = this.get('timer');

    if (timer) {
      clearTimeout(timer);
    }

    this.set('phonebook.isLoading', true);

    /*
      Motivation of timer:

      1) This is imitation of http request loading
      2) This timer accumulate often changes of input value to one request
     */
    this.set('timer', setTimeout(() => {
      this.set('search', value);

      this.set('phonebook.isLoading', false);
    }, 500));
  }
});
