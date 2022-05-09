let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion)
        resolved('Resolvió correcto');
    else
        rejected('Se produjo un error');
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));

//miPromesa
//.then( valor => console.log(valor))
//.catch(error => console.log(error));


let promesa = new Promise((resolver) => {
   // console.log('inicio promesa');
    setTimeout( () => resolver('Saludos con promesa y timeout'),  3000);
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await

async function funcionConPromesaYAmait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

//funcionConPromesaYAmait();
//promesa, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio de funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);
    console.log('Fin de la funcion');
}

funcionConPromesaAwaitTimeout();