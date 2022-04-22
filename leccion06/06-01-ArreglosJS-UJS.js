//Arreglos en Javascript

/*
let autos = new Array('BMW', 'Mercedes Benz', 'Volvo'); // Ya no se usa, forma antigua.
*/

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

console.log(autos);

// Recorrer elementos de un arreglo 

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i]);
}

//Modificar elementos de un arreglo
autos[1] = 'MercedesBenz';
console.log(autos[1]);


//Agregar elementos a un arreglo
autos.push('Audi');

console.log(autos);

console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos);

autos[6] = 'porshe';
console.log(autos);

// Preguntar si es Array

console.log(typeof autos);//Dice que es tipo object

console.log(Array.isArray(autos));

console.log(autos instanceof Array);