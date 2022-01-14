// function miFuncion(){
//     console.log("Saludos de funcion normal");
// }
//miFuncion();


// const miFuncionFlecha = () => {
//     console.log("Saludos de funcion flecha");
// }

//const miFuncionFlecha = () =>console.log("Saludos de funcion flecha");

//miFuncionFlecha();

const saludar = () => "saludos desde funcion flecha";
console.log(saludar());

const regresaObjeto = () => ({nombre: "Juan"});
console.log(regresaObjeto());

const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("Saludos con parametros"); 

const suma = (num1,num2) => num1+num2;
console.log(suma(8,20));