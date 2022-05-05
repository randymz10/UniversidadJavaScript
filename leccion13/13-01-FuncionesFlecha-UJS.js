// Funcion clasica

/*function miFuncion(){
    console.log('Saludos desde mi funcion');
}*/


let miFuncion = function(){
    console.log('Saludos desde mi funcion');
}

//Funcion flecha

//let miFuncionFlecha = () => {
//    console.log('Saludos desde mi función flecha');
//}

miFuncion();

// const miFuncionFlecha = () => console.log('Saludos desde mi función flecha');

//const saludar = () => {
  //  return 'Saludos desde funcion flecha';
//}/


const saludar = () => 'Saludos desde funcion flecha';
console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');

//miFuncionFlecha();