console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/*a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
3er variable.*/

console.log('-Exercise 1.a:');

var x = 5;
var y = 10;

console.log('Numeric type variables x and y with value '+ x +' and '+ y +' respectively');

var sum = x + y;

console.log('The sum of x+y is equal to '+ sum);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b:');

var a = "Hello ";
var b = "John";

console.log('String type variables a and b with value '+ a +' and '+ b +' respectively');

var sentence = a + b;

console.log('The concatenation of variables a and b is equal to '+ sentence);

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
resultado de la suma en una 3er variable (utilizar length).*/

console.log('-Exercise 1.c:');

var c = "Pizza";
var d = "Chocolate";

console.log('String type variables a and b with value '+ c +' and '+ d +' respectively');

var result = c.length + d.length;

console.log('The sum of the length of the variables c and d is equal to '+ result);