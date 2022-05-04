class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, dpto: ${this.departamento}`;
    }
}

function imprimirTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object');

    }
}
let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Randy', 4000, 'Sistemas');

imprimirTipo(empleado1);
imprimirTipo(gerente1);