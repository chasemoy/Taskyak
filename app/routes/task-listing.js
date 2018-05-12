import Route from '@ember/routing/route';
//import taskforminput from '../models/taskforminput';

export default Route.extend({
    firebaseApp: Ember.inject.service(),
    /*
    model() {
    const session = this.get('session').content;
    const now = Date.now('') + '';
    return this.store.query('user', {orderBy: 'uid', equalTo: session.uid})
        .then((records) => {
            return records.get('firstObject');
        }).then((userData) => {
            return userData.store.query(
                'card',
                {
                    orderBy: 'updatedAt',
                    endAt: 1481641085721
                });
        });*/



    model: function (params) {

        const auth = this.get('firebaseApp').auth();
        const userId = auth.currentUser.uid;
        console.dir(userId);
        console.dir(params.userId);
        return this.get('store').query('taskforminput', {
            orderBy: "userID",
            equalTo: userId
        });

        //return this.store.findRecord('taskforminput', params.userID);
    }

    // model(params) {
    //     const auth = this.get('firebaseApp').auth();
    //     const userId = auth.currentUser.uid;
    //     console.log(userId);
    //     return this.store.findRecord(
    //         'firebaseApp'.userID
    //     )
    // }
});