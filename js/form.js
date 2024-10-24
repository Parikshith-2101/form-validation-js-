function validate() {
    let name = document.getElementById('inputName').value;
    let num = document.getElementById('inputNumber').value;
    let email = document.getElementById('inputEmail').value;
    var dob = document.getElementById('inputDOB').value;
    var age = document.getElementById('inputAge').value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var pass = document.getElementById('inputPass').value;
    var cpass = document.getElementById('inputCPass').value;

    let isValid = true;
    let namePattern = /^[a-zA-Z]+$/;
    if (name === "" || !namePattern.test(name)) {
        document.getElementById("name-error").innerText = "Name is not valid";
        document.getElementById('inputName').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("name-error").innerText = "";
        document.getElementById('inputName').style.cssText = "border-color:green;background-color:palegreen;";
    }

    let numPattern = /^\d{10}$/;
    if (num === "" || num.length != 10 || !numPattern.test(num)) {
        document.getElementById("number-error").innerText = "Invalid number";
        document.getElementById('inputNumber').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("number-error").innerText = "";
        document.getElementById('inputNumber').style.cssText = "border-color:green;background-color:palegreen;";
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("email-error").innerText = "Mail id should contain '@' ' . ' and domains(.com or .in or etc)";
        document.getElementById('inputEmail').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
        document.getElementById('inputEmail').style.cssText = "border-color:green;background-color:palegreen;";
    }

    if (dob === "") {
        document.getElementById("date-error").innerText = "Invalid date";
        document.getElementById('inputDOB').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("date-error").innerText = "";
        document.getElementById('inputDOB').style.cssText = "border-color:green;background-color:palegreen;";
    }

    if (age === "" || age > 100 || age < 18) {
        document.getElementById("age-error").innerText = "Age should be between 18 to 100";
        document.getElementById('inputAge').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("age-error").innerText = "";
        document.getElementById('inputAge').style.cssText = "border-color:green;background-color:palegreen;";
    }

    if (!male && !female) {
        document.getElementById("gender-error").innerText = "Select any one";
        isValid = false;
    } else {
        document.getElementById("gender-error").innerText = "";
    }

    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pass === "" || !passPattern.test(pass)) {
        document.getElementById("pass-error").innerText = "Password must be at least 8 characters and include uppercase, lowercase, and a number.";
        document.getElementById('inputPass').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("pass-error").innerText = "";
        document.getElementById('inputPass').style.cssText = "border-color:green;background-color:palegreen;";
    }
    if (cpass === "" || cpass != pass) {
        document.getElementById("c-pass-error").innerText = "Password does'nt match";
        document.getElementById('inputCPass').style.cssText = "border-color:red;background-color:white;";
        isValid = false;
    } else {
        document.getElementById("c-pass-error").innerText = "";
        document.getElementById('inputCPass').style.cssText = "border-color:green;background-color:palegreen;";
    }
    if (isValid) {
        alert("Submitted");
    }
}