import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phonebook/not-found', 'Integration | Component | phonebook/not found', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{phonebook/not-found}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#phonebook/not-found}}
      template block text
    {{/phonebook/not-found}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
