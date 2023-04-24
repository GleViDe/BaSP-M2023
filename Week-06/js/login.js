function onlyNumbersAndLetters(expresion) {
    for (var i = 0; i < expresion.length; i++) {
        var charCode = expresion.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57) && 
        !(charCode >= 65 && charCode <= 90) && 
        !(charCode >= 97 && charCode <= 122)) { 
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

emailInput.addEventListener('blur', function(event) {
    var emailValue = emailInput.value.trim();
    if(emailValue === "") 
        errorTextEmail.nodeValue = 'Email field Required';
    else if(!emailRegex.test(emailValue))
        errorTextEmail.nodeValue = 'Email have an incorrect format';
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
    if(pswValue === "") 
        errorTextPsw.nodeValue = 'Password field Required';
    else if (!onlyNumbersAndLetters(pswValue))
        errorTextPsw.nodeValue = 'Password must only contain letters and numbers';
});

pswInput.addEventListener('focus', function() {
    errorTextPsw.nodeValue = '';
});

//Submit button
var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var alertMessage = '';

    if(errorTextEmail.nodeValue !== '')
        alertMessage += errorTextEmail.nodeValue + '\n';

    if(errorTextPsw.nodeValue !== '')
        alertMessage += errorTextPsw.nodeValue + '\n';

    if(alertMessage === '') {
        alertMessage = 'Form information:\n';
        alertMessage += 'Email: ' + emailInput.value.trim();
        alertMessage += '\nPassword: ' + pswInput.value.trim();
        alert(alertMessage);
    }
    else
        alert(alertMessage);
});


