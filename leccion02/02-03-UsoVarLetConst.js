//Uso básico de var, let y const en JavaScrit

/*nombre = "Juan"; 
//Se puede declarar variables sin var, let o const (no es una buena práctica, al dia de hoy se deberia usar let)
console.log(nombre);*/

let nombre;
nombre = "Juan";
console.log( nombre );

const apellido = "Perez";
//apellido = "Lara";

/*Buenas prácticas para nombres de variables*/

//Se debe usar el camelcase, por ejemplo

/*let nombreCompleto = "Randy Muñoz";
console.log( nombreCompleto );

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

*/

//Reglas para definir nombres de variables en Java Script


//JavaScript es sensibles a mayúsculas y minúsculas

let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";

console.log(nombreCompleto);
console.log(nombrecompleto);
//console.log(NombreCompleto);
//console.log(Nombrecompleto); 

//Las variables no pueden comenzar con números sólo letras, guión bajo (_) o signo de solar ($)

//incorri
//Incorrecto: let 1nombreCompleto;

//Correcto
let _nombreCompleto;
let $nombreCompleto;
let a1nombreCompleto

//No se pueden colocar palabras reservadas como variables 

//incorrecto: let break = 10;
//Puede usarse pero no es buena práctica:

let _break = 10;