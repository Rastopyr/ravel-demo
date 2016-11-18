import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';
const { run, get } = Ember;

moduleForModel('contact', 'Unit | Model | contact', {
  // Specify the other units that are required for this test.
  needs: []
});

test('the model is serialized properly', function(assert) {
  run(() => {
    let store = this.store();
    store.pushPayload({
      data: [
        {
          id: 1,
          type: 'contact',
          attributes: {
            'first-name': 'Alexander',
            'last-name': 'Hamilton',
            'job-title': 'Treasury Secretary',
            company: 'United States Government',
            birthday: '1755-01-11T00:00:00.000Z',
            picture: 'https://en.wikipedia.org/wiki/Alexander_Hamilton#/media/File:Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg',
            email: 'contact@hamiltonbroadway.com',
            phone: '(877) 250-2929'
          }
        }
      ]
    });

    assert.equal(store.peekAll('contact').get('length'), 1, 'there is one record in the store');

    let hamilton = store.peekRecord('contact', 1);
    assert.ok(hamilton, 'the hamilton record exists');
    assert.equal(get(hamilton, 'firstName'), 'Alexander', 'attr key names are deserialized properly');
    assert.ok(get(hamilton, 'birthday') instanceof Date, 'the birthday is a date');
    assert.equal(get(hamilton, 'birthday').getFullYear(), 1755, 'the birth year is correct');
  });
});
