function Login() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById('password').value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Please enter a valid Gmail address");
    }
    else if (pass.length < 5) {
        alert("Password must atleast 5 characters");
    }
    else if (email == "admin123@gmail.com" && pass == "12345") {
        alert("Login successfully");
    } else {
        alert("Invalid credentials");
    }
}