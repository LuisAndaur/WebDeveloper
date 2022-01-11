class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }   

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `ID: ${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad} años`;
    }

}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} IDEmpleado: ${this._idEmpleado} $${this._sueldo}`;
    }

}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro (fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} IDCliente: ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//Prueba clase persona
let persona1 = new Persona("Juan", "Alvarado", 30);
console.log(persona1.toString());
let persona2 = new Persona("Laura", "Ramirez", 24);
console.log(persona2.toString());

//Prueba clase empleado
let emplelado1 = new Empleado("Karla", "Alvarado", 30, 5000);
console.log(emplelado1.toString());
let empleado2 = new Empleado("Raul", "Gimenez", 24, 7000);
console.log(empleado2.toString());

//Prueba clase cliente
let cliente1 = new Cliente("Miguel", "Kanh", 30, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Sofia", "Caruzo", 24, new Date());
console.log(cliente2.toString());