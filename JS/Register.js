function Register() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var pass = document.getElementById('password').value;
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (fname === "" || lname === "") {
        alert("Name can't be empty");
    }
    else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Please enter a valid Gmail address");
    }
    else if (pass.length < 5) {
        alert("Passwor must atleast 5 characters");
    }
    else{
        alert("Register successful");
    }
}

