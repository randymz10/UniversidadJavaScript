/*
6am - 11am - Buenos dias
12pm - 18pm - Buenas tardes
19pm - 24pm - Buenas noches
0am - 6am - Durmiendo
*/

let hora = 6;
let estado;

if(hora >= 6 && hora <= 11){
    estado = "Buenos días";
}
else if(hora >= 12 && hora <= 18){
    estado = "Buenas tardes";
}
else if(hora >= 19 && hora <= 24){
    estado = "Buenas noches";
}
else if(hora >= 0 && hora < 6){
    estado = "Duermiendo";
}
else{
    estado = "Valor incorrecto";
}
console.log(estado);