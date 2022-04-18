// IF - Else

let condicion = false;

if(condicion){
    console.log("Condición verdadera");
}
else{
    console.log("Condición falsa");
}

//Ejemplo

let numero = 2;

if( numero == 1){
    console.log("Número uno");
 }
 else if (numero == 2){
    console.log("Número dos");
 }
 else if(numero == 3){
     console.log("Número 3");
 }
 else if( numero == 4){
     console.log("Número 4");
 }
 else{
     console.log("Número desconocido");
 }

 // Ejercicio estación del año

 let mes = 4;
 let estacion;

 if(mes == 1 || mes == 2 || mes == 12){
     estacion = "Invierno";
 }
else if(mes == 3 || mes == 4 || mes ==5){
    estacion = "Primavera";
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}
else if( mes== 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}

console.log(estacion);