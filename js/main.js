require(["jquery", "services/Login"], function($, Login) {
    
    $(function() {

    	// Sign In button handler
		$('#signInBtn').click( function() {
		    var loginService = new Login();
		
		    var username = $('#username').val();
		    var pass = $('#pass').val();

	        var user = loginService.doLogin(username, pass);
	        
	        if(user != null) {
	        	// Show logged in user
    		    $('#loginForm').html( "<span class='label pull-right'>Logged in user: " + user.username + "</span>" );    		    
	        } else {
	        	$('#errorScreen').show();
	        	$('#errorScreen').html('Username or password incorrect!');
	        	$('#errorScreen').fadeOut(5000);
	        }

	        return false;

		});

    });
});
