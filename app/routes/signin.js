import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		login:function(){
			localStorage.setItem("loggedin",true);
			this.transitionTo("dashboard");
		}
	}
});
