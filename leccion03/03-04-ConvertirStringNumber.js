//Convertir String a Number

let miNumero = "18";

console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar");
} else{
    console.log("Muy joven para votar");
}

let votar = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(votar);

// Función is NaN (Not a number)

miNumero = "18";
edad = Number(miNumero);

console.log(edad);

if( isNaN(edad) ){
    console.log("No es un numero");

} else{
    if(edad >= 18){
        console.log("Puede votar");
    } else{
        console.log("Muy joven para votar");
    }
}

if( isNaN(edad) ){
    console.log("No es un numero");

} else{
    votar = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
    console.log(votar);
}