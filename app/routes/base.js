import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        let self = this,
            loggedin = localStorage.getItem("loggedin");
        if (!loggedin) {
            self.transitionTo('signin');
        } else {
            let v = self.get("gotoView");
            if (v) {
                self.transitionTo(v);
            }
        }
    }
});
