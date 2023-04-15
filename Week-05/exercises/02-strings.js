console.log('--EXERCISE 2: STRINGS');

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
toUpperCase).*/

console.log('-Exercise 2.a:');

var a = "summer vacation";

console.log('String type variable a with value '+ a +' remains as '+ a.toUpperCase() + ' implementing the method toUpperCase');

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');

var b = "winter vacation";

var resultB = b.substring(0,5);

console.log('The first 5 characters of the string type variable b with value '+ b +' are: '+ resultB);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.c:');

var c = "spring vacation";

var resultC = c.substring(c.length - 3);

console.log('The last 3 characters of the string type variable c with value '+ c +' are: '+ resultC)

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/

console.log('-Exercise 2.d:');

var d = "autumn Holidays";

var resultD = d.substring(0,1).toUpperCase() + d.substring(1).toLowerCase();

console.log('String type variable d with value '+ d +' remains as '+ resultD);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 2.e:');

var e = "Harry Potter";

var position = e.indexOf(" ");

console.log('The blank space of the string type variable e with value '+ e +' is in position: '+ position);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/

console.log('-Exercise 2.f:');

var f = "my favorite Movie is: ";
var g = "the lord of the Rings"

var resultF1 = f.substring(0,1).toUpperCase() + f.substring(1).toLowerCase(); 
var resultF2 = g.substring(0,1).toUpperCase() + g.substring(1).toLowerCase();

var resultF = resultF1 + resultF2;

console.log('String type variable f and g with value '+ f +' and '+ g +' respectively remains as '+ resultF);
