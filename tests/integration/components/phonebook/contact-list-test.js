import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from 'ravel-coding-challenge/tests/helpers/start-mirage';

moduleForComponent('phonebook/contact-list', 'Integration | Component | phonebook/contact list', {
  integration: true,
  setup() {
    startMirage(this.container);
  },
});

test('it renders', function(assert) {
  this.set('contacts', server.createList('contact', 10).map((e) =>
    e.attrs
  ));

  this.render(hbs`{{phonebook/contact-list contacts=contacts}}`);

  const actual = this.$().text().trim();

  this.render(hbs`<ul class="contact-list">
  {{#each contacts as | contact |}}
  {{phonebook/contact-item contact=contact}}
  {{/each}}
  </ul>`);

  const expected = this.$().text().trim();

  assert.equal(actual, expected);
});
