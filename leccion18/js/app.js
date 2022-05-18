console.log('Aplicación calculadora');

function sumar(){
    const forma  = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    console.log(operandoA.value);
    let operandoB = forma['operandoB'];
    console.log(operandoB.value)
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números';
    }
    console.log(resultado);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}