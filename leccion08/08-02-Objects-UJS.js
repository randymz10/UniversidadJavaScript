//Acceder a propiedades de un objeto

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

console.log(persona['apellido']);

//Fo in para recorrer propiedades de un objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);//nombre de la propiedad
    console.log(persona[nombrePropiedad]);//valor de la propiedad
}

//Agregar propiedad a un objeto

persona.tel = '43999552359';

console.log(persona);

//Eliminar propiedad a un objeto

delete persona.tel;
console.log(persona);

//Distintas formas de imprimir un objeto

//Concatenar cada valor de cada propiedad

console.log(persona.nombre + ' ' + persona.apellido);

//for in

for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);

}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);