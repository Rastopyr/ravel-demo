import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
const { Service } = Ember;

moduleFor('route:application', 'Unit | Route | application', {});

test('model hook should return the store\'s findAll hook', function(assert) {
  this.register('service:store', Service.extend({
    findAll(...args) {
      return args;
    }
  }));

  let route = this.subject();
  assert.ok(route, 'the route exists');
  assert.deepEqual(route.model(), ['contact'], 'the find all hook for contacts was called');
});
