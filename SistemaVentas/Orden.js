class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
       // this._contadoProductosAgregados = 0; 
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProductos(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos(this._contadoProductosAgregados++) = producto;
        } 
        else{
            console.log('No se pueden agregar más productos');
        }
    } 

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }

        console.log(`Orden: ${this._idOrden} Total: ${this._this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}