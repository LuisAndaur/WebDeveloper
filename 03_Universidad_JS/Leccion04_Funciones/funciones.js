//declaracion de la funcion
function miFuncion(a,b){
    console.log("Suma: " + (a+b));
}

//se llama a la funcion
miFuncion(4,6);

//return
function miFuncionConRetorno(a,b){
    return a + b;
}
let resultado = miFuncionConRetorno(6,7);
console.log("Suma: " + resultado);

//declaracion funcion tipo expresion(anonima)
let sumar = function (a,b){return a + b};
resultado = sumar(3,6);
console.log("Suma: " + resultado);

//declaracion funcion flecha (lambda)
const sumarFlecha = (a,b) => a + b;
resultado = sumarFlecha(13,7);
console.log("Suma: " + resultado);