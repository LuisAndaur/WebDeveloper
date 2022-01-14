class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `[Empleado]\n[Nombre: ${this._nombre}]\n[Sueldo: ${this._sueldo}]`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: \n${super.obtenerDetalles()}\n[Depto: ${this._departamento}]`;
    }
}

//Polimorfismo
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
    }
    else if(tipo instanceof Object){
        console.log("Es un objeto de tipo Object");
    }
}

let empleado1 = new Empleado("Laura",5000);
//console.log(empleado1.obtenerDetalles());


let gerente1 = new Gerente("Juan",4500,"Sistemas");
//console.log(gerente1.obtenerDetalles());

determinarTipo(empleado1);
determinarTipo(gerente1);