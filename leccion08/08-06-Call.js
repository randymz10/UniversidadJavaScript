let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){ //titulo, tel
        return  this.nombre + ' ' + this.apellido
       // return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de Call para usar el método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto());
persona1.nombreCompleto.call( persona2 ); 

console.log(persona1.nombreCompleto.call( persona2 ));