import Controller from '@ember/controller';

export default Controller.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    publishMessage() {
      const auth = this.get('firebaseApp').auth();
      const userID = auth.currentUser.uid;
      var newMessage = this.store.createRecord('messageinput', {
        name: this.get('name'),
        body: this.get('body'),
        userID: userID,
      });
      newMessage.save();
      this.setProperties({
        name: '',
        body: ''
      });
    },
    // deleteMessage: function(messageinput) {
    // var message = this.store.find('messageinput', messageinput, {
    //     //this gets the info from the form fields with this value
    //     name: this.get('name'),
    //     body: this.get('body')
    // });
    //this deletes the data to store and firebase
    //message.destroyRecord();
    //     destroyMessage(messageinput){
    //         messageinput.destroyRecord();
    //         messageinput.deleteRecord();
    //         messageinput.save();
    //       }
    deleteMessage(messageinput){
      messageinput.deleteRecord();
      messageinput.destroyRecord();
      messageinput.save();
    }
  }
});
