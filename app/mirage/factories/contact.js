import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.firstName,
  birthday: faker.date.past,
  picture: faker.image.avatar,
  email: faker.internet.email,
  phone: faker.phone.phoneNumber,
  jobTitle: faker.name.jobTitle,
  company(i) {
    return faker.company.companyName(`${i}`);
  },
});
