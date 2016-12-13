import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phonebook/contact-detail', 'Integration | Component | phonebook/contact detail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{phonebook/contact-detail}}`);

  assert.equal(this.$().text().trim(), 'Not selected contact');

  // Template block usage:"
  this.render(hbs`
    {{#phonebook/contact-detail}}
      Not selected contact
    {{/phonebook/contact-detail}}
  `);

  assert.equal(this.$().text().trim(), 'Not selected contact');
});
