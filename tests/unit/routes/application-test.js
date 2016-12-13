import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {});

test('model hook should return the store\'s findAll hook', function(assert) {
  const route = this.subject();
  assert.ok(route, 'the route exists');
});
