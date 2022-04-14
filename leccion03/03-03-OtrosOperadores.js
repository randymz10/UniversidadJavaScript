// Operador AND (&&), regresa true solo si ambos operandos son true

let a = 5;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}else{
    console.log("Fuera de rango");
}

//Operador OR (||), regresa tru si cualquiera de los operandos es true

let vacaciones = true, diaDescanso = false;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al juego del hijo");
} else{
    console.log("El padre está ocupado");
}

// Operador ternario (?)

let resultado = (1 > 2) ? "verdadero" : 0;
console.log(resultado);

let numero = 110;
resultado = (9 % 2 == 0) ? "Número par" : "Número impar";
console.log(resultado);

