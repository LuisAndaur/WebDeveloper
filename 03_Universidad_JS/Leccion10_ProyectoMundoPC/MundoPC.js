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
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [ID: ${this.idRaton}, Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [ID: ${this.idTeclado}, Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `Monitor: [ID: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamanio}]`
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    toString(){
        return `Computadora: ID: ${this.idComputadora}, Nombre: ${this.nombre}\n ${this,this._monitor}\n ${this._teclado}\n ${this._raton}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadores(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = "";

        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let raton1 = new Raton("Ficha", "LG");
let raton2 = new Raton("Cable", "Genius");
console.log(raton1.toString());
console.log(raton2.toString());

let teclado1 = new Teclado("Ficha", "LG");
let teclado2 = new Teclado("Cable", "Genius");
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor("Philips", "19");
let monitor2 = new Monitor("Quai", "22");
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora("DEYP207", monitor1, teclado1,raton1);
let computadora2 = new Computadora("DEYPE203", monitor2, teclado2,raton2);
console.log(computadora1.toString());
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadores(computadora1);
orden1.agregarComputadores(computadora2);

orden1.mostrarOrden();