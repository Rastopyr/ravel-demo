import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
const { Service } = Ember;

moduleFor('route:contacts', 'Unit | Route | contacts', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('model hook should return the store\'s findAll hook', function(assert) {
  this.register('service:store', Service.extend({
    findAll(...args) {
      return args;
    }
  }));

  this.register('service:phonebook', Service.extend({}));

  const route = this.subject();
  assert.deepEqual(route.model({}), ['contact'], 'the find all hook for contacts was called');
});
