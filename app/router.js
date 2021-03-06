import Ember from 'ember';
import config from './config/environment';

console.log(config.locationType);

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('contacts', function() {
    this.route('contact', { path: ':id' });
  });
});

export default Router;
