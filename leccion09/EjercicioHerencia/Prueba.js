class Persona {
    static contadorPersonas = 0; 

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this,_edad = edad;
    }

    toString(){
        return `${this._idPersona} 
        ${this._nombre}
        ${this._apellido}
        ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}
         ${this._idEmpleado}
         ${this._sueldo}`; 
    }
}

class Cliente extends Persona {
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()}
        ${this._fechaRegistro}
        ${this._idCliente}`
    }
}

//Prueba Persona

let persona = new Persona('Randy', 'Muñoz', 24);
console.log(persona.toString());

let persona1 = new Persona('Maralied', 'Tafur', 23);
console.log(persona1.toString());

let empleado = new Empleado('Ricardo', 'Muñoz', 56, 2100);
console.log(empleado.toString());

let cliente = new Cliente('Milagdy', 'Viñoles', 52, new Date());
console.log(cliente.toString());