function onlyLetters(name) {
    for(var i = 0; i < name.length; i++) {
        var charCode = name.charCodeAt(i);
        if(charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
            return false;
        }
    }
    return true;
}

function isNumber(number) {
    for(var i = 0; i < number.length; i++) {
        var charCode = number.charCodeAt(i);
        if(!(charCode >= 48 && charCode <= 57)) { 
            return false;
        }
    }
    return true;
}

function onlyNumbersAndLetters(expresion) {
    for(var i = 0; i < expresion.length; i++) {
        var charCode = expresion.charCodeAt(i);
        if (!(charCode === 32) && !(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && 
        !(charCode >= 97 && charCode <= 122)) { 
            return false;
        }
    }
    return true;
}

function testPsw(value) {
    for(var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        if(charCode >= 48 && charCode <= 57){
            break;
        }
    }
    if(i === value.length) { 
        return false;
    }
    for(var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            break;
        }
    }
    if(i === value.length) {
        return false;
    }
    for(var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122){
            break;
        }
    }
    if(i === value.length) {
        return false;
    }
    return true;
}

window.onload = () => {
    const name = localStorage.getItem('name');
    const lastName = localStorage.getItem('lastname');
    const dni = localStorage.getItem('dni');
    const birthdate = localStorage.getItem('birthdate');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');
    const locality = localStorage.getItem('locality');
    const postalCode = localStorage.getItem('postal-code');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const confPassword = localStorage.getItem('conf-password');

    document.getElementById('name').value = name;
    document.getElementById('lastname').value = lastName;
    document.getElementById('dni').value = dni;
    document.getElementById('birthdate').value = birthdate;
    document.getElementById('phone').value = phone;
    document.getElementById('address').value = address;
    document.getElementById('locality').value = locality;
    document.getElementById('postal-code').value = postalCode;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    document.getElementById('conf-password').value = confPassword;
}

//Validation of name input
var nameInput = document.getElementById('name');
var nameError = document.createElement('span');
var errorTextName = document.createTextNode('');
var nameContainer = document.querySelector('.name');
nameContainer.appendChild(nameError);
nameError.appendChild(errorTextName);
nameError.className = 'error';

nameInput.addEventListener('blur', function() {
    var nameValue = nameInput.value.trim();
    if(nameValue === "") {
        errorTextName.nodeValue = 'Name field Required';
    }
    else if(!onlyLetters(nameValue)) {
        errorTextName.nodeValue = 'Name field must only contain letters';
    }
    else if(nameValue.length < 4) {
        errorTextName.nodeValue = 'Name must be more than 3 characters';
    }
});

nameInput.addEventListener('focus', function() {
    errorTextName.nodeValue = '';
});

//Validation of lastname input
var lastNameInput = document.getElementById('lastname');
var lastNameError = document.createElement('span');
var errorTextLastName = document.createTextNode('');
var lastNameContainer = document.querySelector('.lastname');
lastNameContainer.appendChild(lastNameError);
lastNameError.appendChild(errorTextLastName);
lastNameError.className = 'error';

lastNameInput.addEventListener('blur', function() {
    var lastNameValue = lastNameInput.value.trim();
    if(lastNameValue === "") {
        errorTextLastName.nodeValue = 'Last Name field Required';
    }
    else if(!onlyLetters(lastNameValue)) {
        errorTextLastName.nodeValue = 'Last Name field must only contain letters';
    }
    else if(lastNameValue.length < 4) {
        errorTextLastName.nodeValue = 'Last Name must be more than 3 characters';
    }
});

lastNameInput.addEventListener('focus', function() {
    errorTextLastName.nodeValue = '';
});

//validation of DNI input
var dniInput = document.getElementById('dni');
var dniError = document.createElement('span');
var errorTextDNI = document.createTextNode('');
var dniContainer = document.querySelector('.dni');
dniContainer.appendChild(dniError);
dniError.appendChild(errorTextDNI);
dniError.className = 'error';

dniInput.addEventListener('blur', function() {
    var dniValue = dniInput.value.trim();
    if(dniValue === "") {
        errorTextDNI.nodeValue = 'ID Number field Required';
    }
    else if(!isNumber(dniValue)) {
        errorTextDNI.nodeValue = 'ID Number must be a number';
    }
    else if(dniValue.length <= 7) {
        errorTextDNI.nodeValue = 'ID Number must be more than 7 digits';
    }
});

dniInput.addEventListener('focus', function() {
    errorTextDNI.nodeValue = '';
});

//validation of bithdate input
var dateInput = document.getElementById('birthdate');
var dateError = document.createElement('span');
var errorTextDate = document.createTextNode('');
var dateContainer = document.querySelector('.bithdate');
dateContainer.appendChild(dateError);
dateError.appendChild(errorTextDate);
dateError.className = 'error';

dateInput.addEventListener('blur', function() {
    var dateValue = dateInput.value;
    var date = new Date(dateValue);
    if(isNaN(date.getTime())) {
        errorTextDate.nodeValue = 'Invalid Date';
    }
    var year = date.getFullYear();
    if((year < 1900) || year > (new Date().getFullYear() - 12)) {
        errorTextDate.nodeValue = 'Invalid Date';
    }
})

dateInput.addEventListener('focus', function() {
    errorTextDate.nodeValue = '';
});

//validation of phone input
var phoneInput = document.getElementById('phone');
var phoneError = document.createElement('span');
var errorTextPhone = document.createTextNode('');
var phoneContainer = document.querySelector('.phone');
phoneContainer.appendChild(phoneError);
phoneError.appendChild(errorTextPhone);
phoneError.className = 'error';

phoneInput.addEventListener('blur', function() {
    var phoneValue = phoneInput.value.trim();
    if(phoneValue === "") {
        errorTextPhone.nodeValue = 'Phone field Required';
    }
    else if(!isNumber(phoneValue)) {
        errorTextPhone.nodeValue = 'Phone number must be a number';
    }
    else if(phoneValue.length !== 10) {
        errorTextPhone.nodeValue = 'Phone number must have 10 digits';
    }
});

phoneInput.addEventListener('focus', function() {
    errorTextPhone.nodeValue = '';
});

//validation of address input
var addressInput = document.getElementById('address');
var addressError = document.createElement('span');
var errorTextAddress = document.createTextNode('');
var addressContainer = document.querySelector('.address');
addressContainer.appendChild(addressError);
addressError.appendChild(errorTextAddress);
addressError.className = 'error';

addressInput.addEventListener('blur', function() {
    var addressValue = addressInput.value.trim();
    var blank = addressValue.lastIndexOf(" ");
    if(addressValue === "") {
        errorTextAddress.nodeValue = 'Address field Required';
    }
    else if(blank === -1) {
        errorTextAddress.nodeValue = 'Address must contain street and number';
    }
    else if(addressValue.length < 5) {
        errorTextAddress.nodeValue = 'Address must contain at least 5 characters';
    }
    else {
        var address = addressValue;
        var street = address.substring(0, blank);
        var number = address.substring(blank + 1);
        if(!onlyNumbersAndLetters(street)) {
            errorTextAddress.nodeValue = 'Street must only contain alphanumeric text';
        }
        else if(!isNumber(number)) {
            errorTextAddress.nodeValue = 'Address number must be a number';
        }
    }
});

addressInput.addEventListener('focus', function() {
    errorTextAddress.nodeValue = '';
});

//validation of locality input
var localInput = document.getElementById('locality');
var localError = document.createElement('span');
var errorTextLocal = document.createTextNode('');
var localContainer = document.querySelector('.locality');
localContainer.appendChild(localError);
localError.appendChild(errorTextLocal);
localError.className = 'error';

localInput.addEventListener('blur', function() {
    var localValue = localInput.value.trim();
    if(localValue === "") {
        errorTextLocal.nodeValue = 'Locality field Required';
    }
    else if(!onlyNumbersAndLetters(localValue)) {
        errorTextLocal.nodeValue = 'Locality must only contain alphanumeric text';
    }
    else if(localValue.length < 4) {
        errorTextLocal.nodeValue = 'Locality must be more than 3 characters';
    }
});

localInput.addEventListener('focus', function() {
    errorTextLocal.nodeValue = '';
});

//validation of postal code input
var postalInput = document.getElementById('postal-code');
var postalError = document.createElement('span');
var errorTextPostal = document.createTextNode('');
var postalContainer = document.querySelector('.postal-code');
postalContainer.appendChild(postalError);
postalError.appendChild(errorTextPostal);
postalError.className = 'error';

postalInput.addEventListener('blur', function() {
    var postalValue = postalInput.value.trim();
    if(postalValue === "") {
        errorTextPostal.nodeValue = 'Postal Code field Required';
    }
    else if(!isNumber(postalValue)) {
        errorTextPostal.nodeValue = 'Postal Code must be a number';
    }
    else if((postalValue.length !== 4) && (postalValue.length !== 5 )) {
        errorTextPostal.nodeValue = 'Postal Code must have 4 or 5 characters';
    }
});

postalInput.addEventListener('focus', function() {
    errorTextPostal.nodeValue = '';
});

//Validation of email input
var emailInput = document.getElementById('email');
var emailError = document.createElement('div');
var errorTextEmail = document.createTextNode('');
var emailContainer = document.querySelector('form div');
emailContainer.appendChild(emailError);
emailError.appendChild(errorTextEmail);
var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
emailError.className = 'error';

emailInput.addEventListener('blur', (event) => {
    var emailValue = emailInput.value.trim();
    if(emailValue === "")  {
        errorTextEmail.nodeValue = 'Email field Required';
    }
    else if(!emailRegex.test(emailValue)) {
        errorTextEmail.nodeValue = 'Email have an incorrect format';
    }
});

emailInput.addEventListener('focus', () => {
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
    else if (!testPsw(pswValue)) {
        errorTextPsw.nodeValue = 'Password must contain one lowercase letter, one uppercase letter, and one number';
    }
    else if(pswValue.length < 8) {
        errorTextPsw.nodeValue = 'Password must contain at least 8 characters';
    }
    else if(!onlyNumbersAndLetters(pswValue)) {
        errorTextPsw.nodeValue = 'Password must only contain alphanumeric text';
    }
});

pswInput.addEventListener('focus', function() {
    errorTextPsw.nodeValue = '';
});

//Validation of confirm password input
var confPswInput = document.getElementById('conf-password');
var confPswError = document.createElement('div');
var errorTextConfPsw = document.createTextNode('');
var confPswContainer = document.querySelector('.conf-password');
confPswContainer.appendChild(confPswError);
confPswError.appendChild(errorTextConfPsw);
confPswError.className = 'error';

confPswInput.addEventListener('blur', function(event) {
    var confPswValue = confPswInput.value.trim();
    var pswValue = pswInput.value.trim();
    if(confPswValue === "") {
        errorTextConfPsw.nodeValue = 'Confirm Password field Requires';
    }
    else if(confPswValue !== pswValue) {
        errorTextConfPsw.nodeValue = 'Please confirm your Password';
    }
});

confPswInput.addEventListener('focus', function() {
    errorTextConfPsw.nodeValue = '';
});

//Submit button
var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var alertMessage = '';

    if(nameInput.value === '') {
        errorTextName.nodeValue = 'Name Field Required';
    }
    if(lastNameInput.value === '') {
        errorTextLastName.nodeValue = 'Last Name Field Required';
    }
    if(dniInput.value === '') {
        errorTextDNI.nodeValue = 'ID Number Field Required';
    }
    if(dateInput.value === '') {
        errorTextDate.nodeValue = 'Birthdate Field Required';
    }
    if(phoneInput.value === '') {
        errorTextPhone.nodeValue = 'Phone Number Field Required';
    }
    if(addressInput.value === '') {
        errorTextAddress.nodeValue = 'Address Field Required';
    }
    if(localInput.value === '') {
        errorTextLocal.nodeValue = 'Locality Name Field Required';
    }
    if(postalInput.value === '') {
        errorTextPostal.nodeValue = 'Postal Code Field Required';
    }
    if(pswInput.value === '') {
        errorTextPsw.nodeValue = 'Password Field Required';
    }
    if(confPswInput.value === '') {
        errorTextConfPsw.nodeValue = 'Confirm Password Field Required';
    }

    if(errorTextName.nodeValue !== '') {
        alertMessage += errorTextName.nodeValue + '\n';
    }
    if(errorTextLastName.nodeValue !== '') {
        alertMessage += errorTextLastName.nodeValue + '\n';
    }
    if(errorTextDNI.nodeValue !== '') {
        alertMessage += errorTextDNI.nodeValue + '\n';
    }
    if(errorTextDate.nodeValue !== '') {
        alertMessage += errorTextDate.nodeValue + '\n';
    }
    if(errorTextPhone.nodeValue !== '') {
        alertMessage += errorTextPhone.nodeValue + '\n';
    }
    if(errorTextAddress.nodeValue !== '') {
        alertMessage += errorTextAddress.nodeValue + '\n';
    }
    if(errorTextLocal.nodeValue !== '') {
        alertMessage += errorTextLocal.nodeValue + '\n';
    }
    if(errorTextPostal.nodeValue !== '') {
        alertMessage += errorTextPostal.nodeValue + '\n';
    }
    if(errorTextPsw.nodeValue !== '') {
        alertMessage += errorTextPsw.nodeValue + '\n';
    }
    if(errorTextConfPsw.nodeValue !== '') {
        alertMessage += errorTextConfPsw.nodeValue + '\n';
    }

    if(alertMessage === '') {
        var formData = new FormData(form);
        var params = new URLSearchParams(formData);
        var dateValue = dateInput.value;
        var date = new Date(dateValue);
        var formattedDate = `${(date.getMonth() + 1).toString().padStart(2,'0')}/${(date.getDate() + 1).toString().padStart(2,'0')}/${date.getFullYear()}`;
        params.set('birthdate', formattedDate);
        var queryParams = params.toString();
        queryParams = queryParams.replace('lastname', 'lastName');
        queryParams = queryParams.replace('locality', 'city');
        queryParams = queryParams.replace('postal-code', 'zip');
        queryParams = queryParams.replace('birthdate', 'dob');
        fetch(`https://api-rest-server.vercel.app/signup?${queryParams}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(!data.success) {
                    alertMessage = 'The request was not succesful\n';
                    for(let i = 0; i < data.errors.length; i++) {
                        alertMessage += data.errors[i].msg + '\n';
                    }
                    throw new Error(alertMessage);
                }
                else {
                    for(var[key, value] of formData) {
                        localStorage.setItem(key, value);
                    }
                    alert(`The request was successful \n${data.msg}`);
                    alertMessage = 'Form information:\n';
                    alertMessage += 'Name: ' + nameInput.value.trim();
                    alertMessage += '\nLast Name: ' + lastNameInput.value.trim();
                    alertMessage += '\nID Number: ' + dniInput.value.trim();
                    alertMessage += '\nBirthdate: ' + dateInput.value.trim();
                    alertMessage += '\nPhone Number: ' + phoneInput.value.trim();
                    alertMessage += '\nAddress: ' + addressInput.value.trim();
                    alertMessage += '\nLocality: ' + localInput.value.trim();
                    alertMessage += '\nPostal Code: ' + postalInput.value.trim();
                    alertMessage += '\nEmail: ' + email.value.trim();
                    alertMessage += '\nPassword: ' + pswInput.value.trim();
                    alertMessage += '\nConfirm Password: ' + confPswInput.value.trim();
                    alert(alertMessage);                    
                }
            })   
            .catch(function(error) {
                alert(error);
            });
    }
    else {
        alert(alertMessage);
    }
});