//Function to validate that the value consists of letters only 
function onlyLetters(name) {
    for(var i = 0; i < name.length; i++) {
        var charCode = name.charCodeAt(i);
        if(charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
            return false;
        }
    }
    return true;
}

//Function to validate that the value is a number
function isNumber(number) {
    for(var i = 0; i < number.length; i++) {
        var charCode = number.charCodeAt(i);
        if(!(charCode >= 48 && charCode <= 57)) { //not a number
            return false;
        }
    }
    return true;
}

//Function to validate that the expresion only contains numbers and letters
function onlyNumbersAndLetters(expresion) {
    for(var i = 0; i < expresion.length; i++) {
        var charCode = expresion.charCodeAt(i);
        if (!(charCode === 32) &&
        !(charCode >= 48 && charCode <= 57) && // numbers
        !(charCode >= 65 && charCode <= 90) && // upper letters
        !(charCode >= 97 && charCode <= 122)) { // lower letters
            return false;
        }
    }
    return true;
}

//Function to check that the password has the required characters
function testPsw(value) {
    for(var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        if(charCode >= 48 && charCode <= 57){//if it has at least a number is OK
            break;
        }
    }
    if(i === value.length) { //search in the entire array and did not find the character
        return false;
    }
    for(var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){//if it has at least an upper letter is OK
            break;
        }
    }
    if(i === value.length) { //search in the entire array and did not find the character
        return false;
    }
    for(var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122){//if it has at least a lower letter is OK
            break;
        }
    }
    if(i === value.length) { //search in the entire array and did not find the character
        return false;
    }
    return true;
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
        errorTextName.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if((!onlyLetters(nameValue)) || (nameValue.length < 4)) {
        errorTextName.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        nameInput.value = '';
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
        errorTextLastName.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if((!onlyLetters(lastNameValue)) || (lastNameValue.length < 4)) {
        errorTextLastName.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        lastNameInput.value = '';
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
        errorTextDNI.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if((!isNumber(dniValue)) || (dniValue.length < 7)) {
        errorTextDNI.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        dniInput.value = '';
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
        alert('Invalid Date');
        dateInput.value = '';
    }
    var year = date.getFullYear();
    if((year < 1900) || year > (new Date().getFullYear() - 12)){ //Must be at least 12 years old to join the gym
        errorTextDate.nodeValue = 'Too young';
        alert('Too young');
        dateInput.value = '';
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
        errorTextPhone.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if((!isNumber(phoneValue)) || (phoneValue.length !== 10)) {
        errorTextPhone.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        dniInput.value = '';
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
        errorTextAddress.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if(blank === -1){
        errorTextAddress.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        addressInput.value = '';
    }
    else if(addressValue.length < 5) {
        errorTextAddress.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        addressInput.value = '';
    }
    else {
        var address = addressValue;
        var street = address.substring(0, blank);
        var number = address.substring(blank + 1);
        if(!onlyNumbersAndLetters(street)) {
            errorTextAddress.nodeValue = 'Incorrect format';
            alert('Incorrect format');
            addressInput.value = '';
        }
        else if(!isNumber(number)) {
            errorTextAddress.nodeValue = 'Incorrect format';
            alert('Incorrect format');
            addressInput.value = '';
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
        errorTextLocal.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if((!onlyNumbersAndLetters(localValue)) || (localValue.length < 4)) {
        errorTextLocal.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        localInput.value = '';
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
        errorTextPostal.nodeValue = 'Field Required';
        alert('Field Required');
    }
    else if((!isNumber(postalValue)) || ((postalValue.length !== 4) && (postalValue.length !== 5 ))) {
        errorTextPostal.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        postalInput.value = '';
    }
});

postalInput.addEventListener('focus', function() {
    errorTextPostal.nodeValue = '';
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
    else if ((!testPsw(pswValue)) || (pswValue.length < 8) || (!onlyNumbersAndLetters(pswValue))) {
        errorTextPsw.nodeValue = 'Incorrect format';
        alert('Incorrect format');
        pswInput.value = '';
    }
});

pswInput.addEventListener('focus', function() {
    errorTextPsw.nodeValue = '';
});






