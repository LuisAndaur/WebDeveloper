//metodo CALL
let persona1 = {
    nombre: "Juan",
    apellido: "Perex",

    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido; 
    },
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara",
}

// Uso de call para usar el método 
// persona1.nombreCompleto con los datos de persona2

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));

//pasar argumentos por el metodo CALL
let persona3 = {
    nombre: "Juan",
    apellido: "Perex",

    nombreCompleto: function(titulo,tel){
        return titulo + ": " + this.nombre + ' ' + this.apellido + ", " + tel; 
    },
}

let persona4 = {
    nombre: "Carlos",
    apellido: "Lara",
}

// Uso de call para usar el método 
// persona1.nombreCompleto con los datos de persona2

console.log(persona3.nombreCompleto('Lic.','45678399'));

console.log(persona3.nombreCompleto.call(persona4,'Ing', '58497723'));