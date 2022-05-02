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