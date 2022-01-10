//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//tipo de dato numerico
var number = 100;
console.log(number);

//tipo de dato object
var object = {
    nombre : "Juan",
    apellido : "Perex",
    telefono : "43445566"
}
console.log(object);

//tipo de dato typeof
var variable = 100;
console.log(typeof variable);

//tipo de dato bool
var flag = true;
console.log(flag);
console.log(typeof flag);

//tipo de dato function
function miFuncion (){}
console.log(miFuncion);
console.log(typeof miFuncion);

//tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//tipo de dato clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);

//tipo de dato array
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);