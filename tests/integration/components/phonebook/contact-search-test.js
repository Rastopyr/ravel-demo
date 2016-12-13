import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('phonebook/contact-search', 'Integration | Component | phonebook/contact search', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{phonebook/contact-search}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#phonebook/contact-search}}
    {{/phonebook/contact-search}}
  `);

  assert.equal(this.$().text().trim(), '');
});
