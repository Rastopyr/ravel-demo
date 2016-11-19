import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('contacts', function() {
    this.route('contact', { path: ':id' });
  });
});

export default Router;
