class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadoras = ++Computadora.contadorComputadoras;
    }

    get idComputadoras() {
        return this._idComputadoras;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `idComputadora: ${this._idComputadoras}, Nombre: ${this._nombre}
        Monitor: ${this._monitor.toString()}
        Teclado: ${this.teclado.toString()}
        Raton: ${this._raton.toString()}`
    }
}