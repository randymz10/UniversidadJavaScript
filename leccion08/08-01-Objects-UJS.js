//Objetos en JavaScript
// Los tipo primitivos no tienen atributos
let x = 10;

console.log(x.length);

let persona = {
    nombre: 'Randy',
    apellido: 'Munoz',
    email: 'rmunoz@mail.com',
    edad: 24,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido)
console.log(persona.edad);
console.log(persona.nombreCompleto());

console.log(persona);

//Otra forma de crear objetos

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Av Simon 340';
persona2.telefono = '43999443029';

console.log(persona2.nombre); 