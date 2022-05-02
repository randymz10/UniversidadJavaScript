class Cliente extends Persona {
    static contadorCliente = 0;

    constructor(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++contadorCliente;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString}
        ${this._fechaRegistro}
        ${this._idCliente}`
    }
}