	
 
 
 
// storing input from register-form
function store() {
var username = document.getElementById('username');
    var pw = document.getElementById('pw');
	localStorage.setItem('username',username.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

// stored data from the register-form

var storeduserName = localStorage.getItem('username');
var storedPw = localStorage.getItem('pw')
 
    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPw = document.getElementById('userPw');




    // check if stored data from register-form is equal to data from login form
    
	if(userName.value == storeduserName && userPw.value == storedPw) {
        alert('You are logged in.');
    }
	
	else {
        alert('ERROR.');
    }
}