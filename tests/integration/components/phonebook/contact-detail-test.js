import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phonebook/contact-detail', 'Integration | Component | phonebook/contact detail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{phonebook/contact-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#phonebook/contact-detail}}
      template block text
    {{/phonebook/contact-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
