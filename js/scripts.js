function logIn() {
    var un = document.loginform.usr.value;
    var pw = document.loginform.pword.value;
    var username = "admin";
    var password = "password";
    if ((un == username) && (pw == password)) {
        return true;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}
