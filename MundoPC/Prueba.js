class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [ID: ${this._idRaton}, Entrada: ${super.tipoEntrada}, Marca: ${super.marca}]`;
    }
}

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

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio) {
        this._marca = marca;
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamanio() {
        return this._tamanio;
    }

    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }

    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}]`;
    }
}

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

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = ' ';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let raton = new Raton('USB', 'LENOVO');
let teclado = new Teclado('PS2', 'HP');
let monitor = new Monitor('Dell', '20 pulgadas');
let computadora = new Computadora('Randy', monitor, teclado, raton);

let raton1 = new Raton('USB', 'DELL');
let teclado1 = new Teclado('USB', 'DELL');
let monitor1 = new Monitor('DELL', '14 pulgadas')
let computadora1 = new Computadora('Maralied', monitor1, teclado1, raton1)

let orden = new Orden ();
orden.agregarComputadora(computadora);
orden.agregarComputadora(computadora1);

orden.mostrarOrden();
