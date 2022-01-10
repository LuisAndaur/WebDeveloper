//declaramos un objeto
let persona = {
    //propiedades
    nombre: "Juan",
    apellido: "Perex",
    email: "jperex@mail.com",
    edad: 28,
    idioma: "es",

    //metodos
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido; 
    },

    //metodo GET
    get nombreCompleto2(){
        return this.nombre + ' ' + this.apellido; 
    },

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

//acceder alos valores del objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

//acceder todo el objeto
console.log(persona);

//acceder al metodo
console.log(persona.nombreCompleto());

//otra manera de declarar objetos
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Av siempre viva 457";
persona2.tel = "4356785";

console.log(persona2.tel);

//otra manera de acceder a los objetos
console.log(persona.nombre);
console.log(persona["nombre"]);

//usando for
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//agregar una propiedad a un objeto
persona2.fechaNacimiento = 1990;
console.log(persona2.fechaNacimiento);

//eliminar una propiedad de un objeto
delete persona2.fechaNacimiento;
console.log(persona2.fechaNacimiento);

//metodo GET
console.log(persona.nombreCompleto2);

//metodo GET con SET    
console.log(persona.lang);

//SET cambio el idioma
persona.lang = "us";
console.log(persona.lang);

//Creacion objeto con constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//agregar propiedad al objeto 
Persona.prototype.tel = "45678862";

let padre = new Persona("Juan", "Perex", "jprex.mail.com");
console.log(padre);
console.log(padre.nombreCompleto());
console.log(padre.tel);

let madre = new Persona("Ana", "Torres", "atorres.mail.com");
console.log(madre);
console.log(madre.tel);


