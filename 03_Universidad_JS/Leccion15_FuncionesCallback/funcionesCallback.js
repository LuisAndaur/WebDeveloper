//Funciones CALLBACK
//FORMA 1
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(num1,num2,funcionCallback){
    let res = num1 + num2;
    funcionCallback(`El resultado es: ${res}`);
}

sumar(5,7,imprimir);

//FORMA 2
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(num1,num2,funcionCallback){
    let res = num1 + num2;
    funcionCallback(`El resultado es: ${res}`);
}

sumar(3,14,imp);

//SETTIMEOUT
//Llamadas asíncronas con uso de setTimeout
function miFuncionCallback(){
    console.log("Saludo asíncrono despues de 3s");
}

setTimeout(miFuncionCallback,3000);//despues de 3 segundos

setTimeout(function(){console.log("Saludo despues de 5s")},5000);

setTimeout( () => console.log("Saludo despues de 7s"),7000 );


//SETINTERVAL
//Llama la funcion cada cierto tiempo

let reloj = () =>{
    let fecha = new Date();
    console.log(`Hora: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//llama a la funcion cada 1 segundo