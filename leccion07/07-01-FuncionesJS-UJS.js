// Funciones en Javascript

//Hoisting
miFuncion(4, 2);

//Declaracion de la función
/*function miFuncion(a, b){
    console.log('Suma: ' + (a + b));
}*/

//Llamar la funcion
miFuncion(2, 3);


//Palabra return

function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion(2, 3);

console.log(resultado);

//Funciones de tipo expresión 
//Declaracion

let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

//Funciones de tipo flecha

const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);

console.log(resultado);

// Funciones Self invoking

(function (a, b){
    console.log('Ejecutando la funcion ' + (a + b));
})(3, 4);

//Funciones como objetos

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

