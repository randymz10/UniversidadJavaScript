// Ciclo While

let contador = 0; 
/*
while( contador  < 3){
    console.log(contador);
    contador++;
}

console.log('Fin ciclo while');


Ciclo Do While

do{
    console.log(contador);
    contador++;
}while(contador < 3);

console.log('Fin del ciclo do while');


//Ciclo for

for (contador = 0; contador < 3; contador++) {
   console.log(contador);    
}
console.log('Fin ciclo for');

Palabra break

for(contador = 0; contador <=10; contador++){
    if( contador % 2 == 0){
        console.log(contador);
        break;
    }
}
console.log('Fin ciclo for');

*/

//Palabra continue
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue; //ir a la siguiente iteracion
    }
        console.log(contador);
}