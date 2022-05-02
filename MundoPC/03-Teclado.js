class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Raton: [ID: ${this._idTeclado}, Entrada: ${super.tipoEntrada}, Marca: ${super.marca}]`;
    }
}