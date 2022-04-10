/*Tipos de datos en JavaScript*/

/*Tipo de dato String */

var string = "Carlos";
console.log(string);


// Tipo de dato number
var numero = 1000;
console.log(numero);

//Tipo de dato object

var objeto = {
    nombre: "Randy",
    apellido: "Muñoz",
    edad: 24
}

console.log(objeto);

//Tipo de dato boolean (true, false)
var bandera = true; 
console.log(bandera);

//Tipo de dato function

function miFuncion(){}
console.log(miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);

x = undefined;
console.log(typeof x);

//Tipo null = ausencia de valor

var y = null;
console.log(typeof y)

//TypeOf en JavaScript

console.log(typeof string);

//Arreglos

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// Valores vacíos

var z = '';
console.log(z);
console.log(typeof z);