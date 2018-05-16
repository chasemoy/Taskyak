import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('index');
  this.route('signin');
  this.route('register');
  this.route('navbar');
  this.authenticatedRoute('welcome');
  this.route('taskforminput');
  this.route('about');
  this.route('task-listing');
  this.route('messages');
});

export default Router;
