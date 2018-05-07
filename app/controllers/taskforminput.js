import Controller from '@ember/controller';

export default Controller.extend({
  firebaseApp: Ember.inject.service(),
  number: '',
  title: '',
  date: '',
  body: '',

  actions: {
    publishTask() {
      const auth = this.get('firebaseApp').auth();
      const number = this.get('number');
      const title = this.get('title');
      const date = this.get('date');
      const body = this.get('body');
      const userID = auth.currentUser.uid;

      var newPost = this.store.createRecord('taskforminput', {
        number: number,
        title: title,
        date: date,
        body: body,
        userID: userID,

      });
      newPost.save();
      this.set('number', ' ');
      this.set('title', ' ');
      this.set('date', ' ');
      this.set('body', ' ');


    }
  }

});
