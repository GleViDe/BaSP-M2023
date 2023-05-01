function onlyNumbersAndLetters(expresion) {
    for (var i = 0; i < expresion.length; i++) {
        var charCode = expresion.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && 
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
    if(emailValue === "") {
        errorTextEmail.nodeValue = 'Email field Required';
    }
    else if(!emailRegex.test(emailValue)) {
        errorTextEmail.nodeValue = 'Email have an incorrect format';
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
        errorTextPsw.nodeValue = 'Password field Required';
    }
    else if (!onlyNumbersAndLetters(pswValue)) {
        errorTextPsw.nodeValue = 'Password must only contain letters and numbers';
    }
});

pswInput.addEventListener('focus', function() {
    errorTextPsw.nodeValue = '';
});

//Submit button

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var alertMessage = '';
    var modal = document.getElementById("myModal");
    var closeBtn = document.getElementsByClassName("close")[0];
    var h1 = document.querySelector('.top h1');
    var p = document.querySelector('.modal-content p');

    if(emailInput.value === '') {
        errorTextEmail.nodeValue = 'Email field Required';
    }
    if(pswInput.value === '') {
        errorTextPsw.nodeValue = 'Last Name Field Required';
    }

    if(errorTextEmail.nodeValue !== '') {
        alertMessage += errorTextEmail.nodeValue + '\n';
    }
    if(errorTextPsw.nodeValue !== '') {
        alertMessage += errorTextPsw.nodeValue + '\n';
    }
        
    if(alertMessage === '') {
        var email = emailInput.value.trim();
        var psw = pswInput.value.trim();
        var queryParams = 'email='+ email +'&password='+ psw;
        fetch('https://api-rest-server.vercel.app/login?' + queryParams)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(!data.success) {
                    throw new Error('The request was not successful<br>'+ data.msg);
                }    
                else {
                    h1.textContent = 'Successful Login';
                    p.innerHTML = 'The request was successful<br>'+ data.msg +'<br><br>Form information:<br>Email: '+
                    email +'<br>Password: '+ psw;
                    modal.className += " visible";
                }
            })   
            .catch(function(error) {
                h1.textContent = 'Login Failed';
                p.innerHTML = error;
                modal.className += " visible";
                // alert(error);
            });
    }
    else {
        alert(alertMessage);
    }

    closeBtn.onclick = function() {
        modal.className = modal.className.substring(0,5);
    }
});