import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'li',

  hrefClass: computed('isActive', function() {
    return `contact selectable ${this.get('isActive') && 'active'}`;
  }),
});
