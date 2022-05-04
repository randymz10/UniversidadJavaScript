'use strict'
try{
   let x = 10;
  // miFuncion();

  throw 'Mi error';
}
catch(error){
    console.log(error);
}
finally{
    console.log('Termina la revisión de errores');
}

console.log('Continuamos...'); 

let resultado = 'Hola'; 

try {
    //x = 10;
    if(isNaN(resultado)) throw 'No es un numero';
    else if (resultado === '') throw 'Es cadena vacía';
    else if( resultado >= 0) throw 'Valor positivo';
    else if( resultado < 0) throw 'Valor negativo'
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message)
}

finally{
    console.log('Termina revisión de errores');
}