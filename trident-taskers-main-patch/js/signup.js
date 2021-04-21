	
 

// storing input from register-form
function store() {
    var username = document.getElementById('username');
    var pw = document.getElementById('pw');
	localStorage.setItem('username',username.value);
    localStorage.setItem('pw', pw.value);
	
	alert("Information Saved");
}

// check if stored data from register-form is equal to entered data in the   login-form
