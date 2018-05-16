import Route from '@ember/routing/route';

export default Route.extend({
  firebaseApp: Ember.inject.service(),
  model: function () {

    //   const auth = this.get('firebaseApp').auth();
    //   const userId = auth.currentUser.uid;
    //   console.dir(userId);
    //   console.dir(params.userId);
    //   return this.get('store').query('messageinput', {
    //       orderBy: "userID",
    //       equalTo: userId
    //   });

    return this.store.findAll('messageinput');

    //return this.store.findRecord('taskforminput', params.userID);
  }

});

