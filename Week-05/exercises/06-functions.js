console.log('--EXERCISE 6: FUNCTIONS');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 6.a:');

function sum(x, y) {
    return x + y;
}

var num1 = 10;
var num2 = 5;
var sum = sum(num1, num2);
console.log('The result of '+ num1 +' + '+ num2 +' is: '+ sum);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN
como resultado.*/

console.log('-Exercise 6.b:');

function newSum(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        alert('One of the parameters is not a number');
        return NaN;
    }
    return x + y;
}

num1 = 5;
num2 = "hola";
sum = newSum(num1, num2);
console.log('The result of '+ num1 +' + '+ num2 +' is: '+ sum);

/*c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
entero.*/

console.log('-Exercise 6.c:');

function validateInterger(num) {
    return Number.isInteger(num);
}

var a = 5;

if (validateInterger(a)) {
    console.log('The variable a with value '+ a +' is an interger number');
}
else {
    console.log('The variable a with value '+ a +' is not an interger number');
}

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que
valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número
convertido a entero (redondeado).*/

console.log('-Exercise 6.d:');

function sumWithValidation(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        alert('One of the parameters is not a number');
        return NaN;
    }
    if (!validateInterger(x)) {
        x = Math.round(x);
        alert('Parameter 1 has been rounded to ' + x);
    }
    if (!validateInterger(y)) {
        y = Math.round(y);
        alert('Parameter 2 has been rounded to ' + y);
    }
    return x + y;
}

num1 = 10.5;
num2 = 5;
sum = sumWithValidation(num1, num2);

console.log('The result of '+ num1 +' + '+ num2 +' is: '+ sum);

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
que todo siga funcionando igual que en el apartado anterior.*/

console.log('-Exercise 6.e:');

function roundNumber(x) {
    if (!validateInterger(x)) {
        x = Math.round(x);
        alert('The parameter has been rounded to ' + x);
    }
    else {
        alert('The parameter is an interger number, no rounding needed');
    }
    return x;
}

function newSumWithValidation(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        alert('One of the parameters is not a number');
        return NaN;
    }
    x = roundNumber(x);
    y = roundNumber(y);
    return x + y;
}

sum = newSumWithValidation(num1, num2);

console.log('The result of '+ num1 +' + '+ num2 +' is: '+ sum);