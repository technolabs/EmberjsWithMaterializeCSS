import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.route('projects');
  this.route('dashboard');
  this.route('projectCategory');
  this.route('users');
});

export default Router;
