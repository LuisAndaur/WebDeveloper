class Persona{

    //Atributo estatico
    static contadorObjetosPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        if(Persona.contadorObjetosPersona < Persona.MAX_OBJ){
            this.idPersona = Persona.contadorObjetosPersona++;
        }
        else
        {
            console.log("Se llegó al máximo deobjetos permitidos");
        }
        
        this._nombre = nombre;
        this._apellido = apellido;
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

    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }

    //Metodos estaticos
    static Saludar(){
        console.log("Saludos desde el metodo static"); 
    }

    static Saludar2(persona){
        console.log("Hola soy " + persona.nombre); 
    }
}


let persona1 = new Persona("Juan", "Perex");
console.log(persona1.nombre);

let persona2 = new Persona("Laura", "Sanchez");
console.log(persona2.nombre);

let persona3 = new Persona("Patricia", "Sosa");
console.log(persona3.nombre);

persona1.nombre = "Juan Carlos";

console.log(persona1.nombre);

console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

Persona.Saludar();
Persona.Saludar2(persona1);

console.log(Persona.contadorObjetosPersona);

console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Pedro", "Portero");
let persona5 = new Persona("Alex", "Sanz");
let persona6 = new Persona("Lalo", "Mir");

console.log(persona4.toString());
console.log(persona5.toString());
console.log(persona6.toString());