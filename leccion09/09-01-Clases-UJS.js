//Clases en Javascript

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

    toString(){
        return super.nombreCompleto() 
    }
}

let persona1 = new Persona('Randy', 'Munoz');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );


console.log(persona1.nombre);//get nombre
persona1.nombre = 'Eduardo'; // set nombre('Eduardo')

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1.nombreCompleto())


console.log(empleado1.toString());