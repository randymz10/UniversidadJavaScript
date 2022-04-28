class Persona{

    static contadorPersona = 0; //Atributo de clase
    
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log('Se alcanzó el máximo de objetos');
        }
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    static saludar2(persona){
        console.log(persona._nombre + ' ' + persona._apellido);
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
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString() );

console.log( Persona.contadorPersona );

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString() );

console.log( Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;

console.log( Persona.MAX_OBJ);

let persona3 = new Persona('Maralied', 'Tafur');
let persona4 = new Persona('Milagdy', 'Viñoles');
let persona5 = new Persona('Ricardo', 'Muñoz');
console.log( persona4.toString());