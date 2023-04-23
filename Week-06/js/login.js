//Function to validate if the password contains only numbers and letters
function onlyNumbersAndLetters(expresion) {
    for (var i = 0; i < expresion.length; i++) {
        var caracterCode = expresion.charCodeAt(i);
        if (!(caracterCode >= 48 && caracterCode <= 57) && // numbers
        !(caracterCode >= 65 && caracterCode <= 90) && // upper letters
        !(caracterCode >= 97 && caracterCode <= 122)) { // lower letters
            return false;
        }
    }
    return true;
}

//Validation of the email input

var emailInput = document.getElementById('email');
var emailError = document.createElement('div');
var errorTextEmail = document.createTextNode('');
var emailContainer = document.querySelector('form div');
emailContainer.appendChild(emailError);
emailError.appendChild(errorTextEmail);
var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
emailError.className = 'error';

emailInput.addEventListener('blur', function(evet) {
    var emailValue = emailInput.value.trim();
    if(emailValue === "") {
        errorTextEmail.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if(!emailRegex.test(emailValue)) {
        errorTextEmail.nodeValue = 'Incorrect format';
        alert('Incorrect format');
    }
});

emailInput.addEventListener('focus', function() {
    errorTextEmail.nodeValue = '';
});

//Validation of password input

var pswInput = document.getElementById('password');
var pswError = document.createElement('div');
var errorTextPsw = document.createTextNode('');
var pswContainer = document.querySelector('.password');
pswContainer.appendChild(pswError);
pswError.appendChild(errorTextPsw);
pswError.className = 'error';

pswInput.addEventListener('blur', function(event) {
    var pswValue = pswInput.value.trim();
    if(pswValue === "") {
        errorTextPsw.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if (!onlyNumbersAndLetters(pswValue)) {
        errorTextPsw.nodeValue = 'Password must only contain letters and numbers';
        alert('Password must only contain letters and numbers');
    }
});

pswInput.addEventListener('focus', function() {
    errorTextPsw.nodeValue = '';
});

