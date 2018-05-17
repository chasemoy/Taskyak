'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'p1',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
    apiKey: "AIzaSyDVT8TDcFDZaf8oSWYVI8hbXXQeZbdup3I",
      authDomain: "taskmanager-8f702.firebaseapp.com",
      databaseURL: "https://taskmanager-8f702.firebaseio.com",
      projectId: "taskmanager-8f702",
      storageBucket: "taskmanager-8f702.appspot.com",
      messagingSenderId: "1076003485828"


    },
    torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
