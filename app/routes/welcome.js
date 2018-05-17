import Route from '@ember/routing/route';
//import taskforminput from '../models/taskforminput';

export default Route.extend({
    firebaseApp: Ember.inject.service(),
 

    model: function (params) {
        const auth = this.get('firebaseApp').auth();
        const userId = auth.currentUser.uid;
        console.dir(userId);
        console.dir(params.userId);
        return this.get('store').query('taskforminput', {
            orderBy: "userID",
            equalTo: userId
        });
    }
});
