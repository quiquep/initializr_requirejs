define(["models/User"], function(User){

	function Login() {
		this.doLogin = function(username, pass) {			        					
					if( ( username == 'test' ) && ( pass == 'test' ) ) {
						return new User("test");
					} else {
						return null;	
					}					
			};
	}

	return Login;
});
