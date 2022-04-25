function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '443322';


let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '221133';
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
madre.tel = '55992201';
console.log(madre.tel);