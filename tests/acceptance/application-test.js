import { test } from 'qunit';
import moduleForAcceptance from 'ravel-coding-challenge/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting the home page', function(assert) {
  let contacts = server.createList('contact', 10);

  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/', 'we are at the correct route');
    assert.equal(find('.contact.selectable').length, 10, 'there are 10 contacts in the list');
    contacts.forEach((contact, index) => {
      let selector = `.contact.selectable:eq(${index})`;
      let element = find(selector);
      assert.ok(element, `contact #${index} exists`);
      assert.equal(element.hasClass('active'), index === 0, 'the first element is active');
      assert.equal(find(`${selector} .name`).text().trim(), `${contact.firstName} ${contact.lastName}`, 'the name is rendered correctly');
      assert.equal(find(`${selector} .title-company`).text().trim(), `${contact.jobTitle} at ${contact.company}`, 'the company/position is rendered correctly');
      assert.equal(find(`${selector} img`).attr('src'), contact.picture, 'the picture is pointing to the right place');
    });

    let [firstContact] = contacts;
    let selector = '.contact-detail';
    assert.equal(find(`${selector} .name`).text().trim(), `${firstContact.firstName} ${firstContact.lastName}`, 'the name is rendered correctly');
    assert.equal(find(`${selector} .title-company`).text().trim(), `${firstContact.jobTitle} at ${firstContact.company}`, 'the company/position is rendered correctly');
    assert.equal(find(`${selector} img`).attr('src'), firstContact.picture, 'the picture is pointing to the right place');
    assert.equal(find(`${selector} .birthday`).text().trim(), `${new Date(firstContact.birthday)}`, 'the birthday is rendered correctly');
    assert.equal(find(`${selector} .phone`).text().trim(), `${firstContact.phone}`, 'the phone number is rendered correctly');
    assert.equal(find(`${selector} .email`).text().trim(), `${firstContact.email}`, 'the email is rendered correctly');
  });
});
