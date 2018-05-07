import Controller from '@ember/controller';
import { inject } from '@ember/service';


export default Controller.extend({
    session: inject(),
    beforeModel: function () {
        return this.get('session').fetch().catch(function () { });
    },
    actions: {
        signOut() {
            this.get('session').close();
            this.transitionToRoute('index');
        }
    }
});
