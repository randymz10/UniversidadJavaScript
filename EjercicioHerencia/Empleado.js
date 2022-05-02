class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(sueldo){
        this._sueldo = sueldo;
        this._idEmpleado = ++contadorEmpleado;
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

let empleado = new Empleado('Randy', 'Muñoz', 24, 4000)
console.log(empleado.toString());