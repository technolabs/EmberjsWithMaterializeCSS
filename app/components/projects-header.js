import Ember from 'ember';

export default Ember.Component.extend({
    didRender: function() {
        $(".dropdown-button").dropdown();
    },
    actions: {
        logout: function() {
            let self = this,
                loggedin = localStorage.setItem("loggedin", false);
           window.location.href = "signin";
        }
    }
});
